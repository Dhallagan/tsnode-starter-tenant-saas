import { Request, Response } from 'express';
import {EntityRepository, Repository} from "typeorm";
import {getConnection} from "typeorm";
import {User} from "../entity/User";


@EntityRepository(User)
export class UserRepository extends Repository<User> {


    public async createUser(res: Response, username: string, email: string, passwordHash: string){
        // var newUser = { Username: username, 
        //     Email: email, 
        //     EmailConfirmed: false, 
        //     Password: password, 
        //     PasswordSalt: "", 
        //     //PhoneNumber: "", 
        //     PhoneNumberConfirmed: false, 
        //     TwoFactorEnabled: false,
        //     //ForgotPasswordCode: ""
        //  }

        return await getConnection().manager.save(User, {Username: username, Email: email, PasswordHash: passwordHash});
    }

    
    public async getUserByEmail(email: string){
        // var newUser = { Username: username, 
        //     Email: email, 
        //     EmailConfirmed: false, 
        //     Password: password, 
        //     PasswordSalt: "", 
        //     //PhoneNumber: "", 
        //     PhoneNumberConfirmed: false, 
        //     TwoFactorEnabled: false,
        //     //ForgotPasswordCode: ""
        //  }

        return await getConnection().manager.findOne(User, {Email: email});
    }


}