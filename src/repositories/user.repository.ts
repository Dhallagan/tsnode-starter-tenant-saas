import { Request, Response } from 'express';
import moment from 'moment';
import { EntityRepository, Repository, getRepository, MoreThan } from "typeorm";
import { getConnection } from "typeorm";
import { User } from "../entity/User";


@EntityRepository(User)
export class UserRepository extends Repository<User> {


    public async createUser(res: Response, username: string, email: string, passwordHash: string){
        return await getConnection().manager.save(User, {Username: username, Email: email, PasswordHash: passwordHash});
    }

    
    public async getUserByEmail(email: string){
        return await getConnection().manager.findOne(User, {Email: email});
    }

    public async getUserByToken(token: string){
        // NEED TO ADD EXPIRATION
        return await getConnection().manager.findOne(User, { where: {PasswordResetToken: token , PasswordResetExpires: MoreThan(Date.now())} });
    }

    public async forgotPassword(email: string, token: string, expiration: string){
        const userRepository = getRepository(User); // you can also get it via getConnection().getRepository() or getManager().getRepository()
        return await userRepository.update({Email: email}, {PasswordResetToken: token, PasswordResetExpires: expiration});
    }

    public async saveUser(res: Response, user: User){
        return await getConnection().manager.save(User, user);
    }
}