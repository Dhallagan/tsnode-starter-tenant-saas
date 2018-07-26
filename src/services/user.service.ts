import { Response } from 'express';
import { UserRepository } from "../repositories/user.repository";


export class UserService {

    private userRepository: UserRepository;

    constructor() {
        //super();
        this.userRepository = new UserRepository();
    }

    public async createUser(res: Response, email: string, username: string, password: string) {
        username = username.toLowerCase();
        email = email.toLowerCase();
        const user = await this.userRepository.createUser(res, username, email, password, "");
        // Send Email
        
        //Notify
        return user;
    }

    public async getUserById(res: Response, uId: number) {
        const user = await this.userRepository.getUserById(res, uId);
        // Send Email
        
        //Notify
        return user;
    }
}

