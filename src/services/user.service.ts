import { Response } from 'express';
import { Emailer } from '../email/emailer';
import { UserRepository } from "../repositories/user.repository";
import bcrypt from 'bcrypt';
import moment from 'moment';
import * as jwt from 'jsonwebtoken';
import { Authentication } from '../core/middleware/Authentication'

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
        const user = await this.userRepository.createUser(res, username, email, passwordHash);

        // Send email
        // Emailer.welcomeEmail(user.email, user.username, user.emailCode);
        Emailer.welcomeEmail("test@test.com", "", "");

        return user;
    }

    public async login(res: Response, email: string, password: string) {
        const user = await this.userRepository.getUserByEmail(email)
        
        if(!user){
            return  {'errors': [{'msg': 'Email not found.'}]}
        }

        if(!bcrypt.compare(password, user.PasswordHash)){
            return {'errors': [{'msg': 'Invalid password.'}]}
        } else {
            return {token: this.generateToken(user), user: user}
        }
        

    }

    public async authCheck(res: Response, email: string, password: string) {
        console.log("Authorized")

    }
}

