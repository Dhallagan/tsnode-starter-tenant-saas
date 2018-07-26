import { Request, Response } from 'express';
import {EntityRepository, Repository} from "typeorm";
import {getConnection} from "typeorm";
import {User} from "../entity/User";

@EntityRepository(User)
export class UserRepository extends Repository<User> {

    // public async getUserById(res: Response): Promise<UserModel> {
    //     return await this.usersRepository.getUserById(res, this.getUserId(res));
    // }

    public async getUserById(res: Response, uId: number){
        return await getConnection().manager.find(User, { Id: uId });
    }

    // find(){
    //     return this.find();
    // }

    public async createUser(res: Response, username: string, email: string, password: string, passwordSalt: string){
        var newUser = { Username: username, 
            Email: email, 
            EmailConfirmed: false, 
            Password: password, 
            PasswordSalt: "", 
            //PhoneNumber: "", 
            PhoneNumberConfirmed: false, 
            TwoFactorEnabled: false,
            //ForgotPasswordCode: ""
         }

        return await getConnection().manager.save(User, newUser);
    }
}