import { Response } from 'express';
import { Emailer } from '../email/emailer'
import { UserRepository } from "../repositories/user.repository";
import bcrypt from 'bcrypt'

export class UserService {

    private userRepository: UserRepository;

    constructor() {
        //super();
        this.userRepository = new UserRepository();
    }

    public async createUser(res: Response, username: string, email: string, password: string) {
        username = username.toLowerCase();
        email = email.toLowerCase();

      
        const userExists = await this.userRepository.findUserByEmail(email)
        
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
        const user = await this.userRepository.findUserByEmail(email)
        
        if(!user){
            return  {'errors': [{'msg': 'Email not found.'}]}
        }

        if(bcrypt.compare(password, user.PasswordHash)){
            // HAND OFF TOKEN
            return user;
        }
        
        return {'errors': [{'msg': 'Invalid password.'}]}
    }
}

