import { Response } from 'express';
import { Emailer } from '../email/emailer';
import { UserRepository } from "../repositories/user.repository";
import bcrypt from 'bcrypt';
import moment from 'moment';
import * as jwt from 'jsonwebtoken';
import { v4 as UUId } from 'uuid';

export class UserService {

    private userRepository: UserRepository;

    
    constructor() {
        //super();
        this.userRepository = new UserRepository();
    }

    public generateToken(user) {
        var payload = {
            iss: "localhost",
            sub: user._id,
            iat: moment().unix(),
            exp: moment().add(14, 'days').unix()
        };
        return jwt.sign(payload, 'secretsecretsecret');
    }




    public async createUser(res: Response, username: string, email: string, password: string) {
        username = username.toLowerCase();
        email = email.toLowerCase();
      
        const userExists = await this.userRepository.getUserByEmail(email)
        
        if(userExists){
            return  {'errors': [{'msg': 'Account with that email address already exists.'}]}
        }

        const passwordHash = await bcrypt.hash(password, 10)
        const user = await this.userRepository.createUser(res, username, email, passwordHash, UUId());

        // Send email
        Emailer.welcomeEmail(user.Email, user.Username, user.EmailVerifyToken);
    

        return user;
    }




    public async verifyEmail(res: Response, verifyEmailToken: string) {
      
        var verifiedUser = await this.userRepository.getUserByToken(verifyEmailToken)
        
        if(!verifiedUser){
            return  {'errors': [{'msg': 'Email verification token is invalid or expired.'}]}
        }

        verifiedUser.EmailVerified = true
        verifiedUser.EmailVerifyToken = ""

        await this.userRepository.saveUser(res, verifiedUser);

        // Send Registration complete email?
    
        return {'msg': 'Your email has been successfully verified.'};
    }


    

    public async login(res: Response, email: string, password: string) {
        console.log(email)
        const user = await this.userRepository.getUserByEmail(email)
        
        if(!user){
            return  res.status(200).json({'errors': [{'msg': 'Email not found.'}]})
        }
        var passwordMatch = await bcrypt.compare(password, user.PasswordHash)

        if(!passwordMatch){
            return  res.status(200).json({'errors': [{'msg': 'Invalid password.'}]})
        } else {
            return  res.status(200).json({token: this.generateToken(user), user: user})
        }
    }




    public async recoverPassword(res: Response, email: string) {
        email = email.toLowerCase();

        var userExists = await this.userRepository.getUserByEmail(email)
        console.log(userExists)
        if(!userExists){
            return  {'errors': [{'msg': 'Account with the email address '+ email + ' email address does not exist.'}]}
        }

        userExists.PasswordResetToken = UUId()
        userExists.PasswordResetExpires = moment().add(1, 'days').toDate()

        const user = await this.userRepository.forgotPassword(userExists)

        Emailer.forgotPasswordRequestEmail(user.Email, user.PasswordResetToken)

        return {'msg': 'An email has been sent to '+ email + ' with further instruction.'};
    }




    public async resetPassword(res: Response, token: string, password: string) {
        console.log(token, password)
        var user = await this.userRepository.getUserByTokenAndExpiration(token)
        if(!user) {
            return  {'errors': [{'msg': 'Password reset token is invalid or expired.'}]}
        }

        // NEED TO CLEAR PasswordRestExpirs date as well 
        user.PasswordHash = await bcrypt.hash(password, 10);
        user.PasswordResetToken = "";

        await this.userRepository.saveUser(res, user);

        Emailer.passwordResetSuccessEmail(user.Email)

        return {'msg': 'Your password has been saved successfully.'}
    }
}

