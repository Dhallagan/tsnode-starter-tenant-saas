import { Request, Response } from 'express';
import moment from 'moment';
import { EntityRepository, Repository, getRepository, MoreThan, TreeLevelColumn } from "typeorm";
import { getConnection } from "typeorm";
import { User } from "../entity/User";
import { Tenant } from "../entity/Tenant";


@EntityRepository(User)
export class UserRepository extends Repository<User> {


    public async createUser(res: Response, firstname: string, lastname: string, email: string, passwordHash: string, emailVerifyToken: string, tenant, role:string = 'Admin'){
        return await getConnection().manager.save(User, {FirstName: firstname, LastName: lastname, Email: email, PasswordHash: passwordHash, EmailVerifyToken: emailVerifyToken, Tenant: tenant, Role: role});
    }


    public async getUserByEmail(email: string){
        return await getConnection().manager.findOne(User, {Email: email});
    }


    public async getUserByToken(token: string){
        return await getRepository(User).findOne({EmailVerifyToken: token});
    }


    public async getUserByTokenAndExpiration(token: string){
        return await getConnection().manager.findOne(User, { where: {PasswordResetToken: token , PasswordResetExpires: MoreThan(Date.now())} });
    }


    public async forgotPassword(user: User){
        return await getRepository(User).save(user);
    }


    public async saveUser(user: User){
        return await getConnection().manager.save(User, user);
    }


    public async getUserById(id: number){
        return await getRepository(User).findOne(id);
    }


    public async getUserByIdWithRelations(id: number) {
        return await getRepository(User).findOne({ where: {Id: id}, relations: ["Tenant"] });
    }


    public async getUsers(){
        return await getConnection().manager.find(User);
    }


    // public async create(params: Object){
    //     return await getRepository(User).save(params);
    // }


    public async updateUser(id: number, user: User){
        
        return await getRepository(User).update(id, user);
    }


    public async getOne(params: Object){
        return await getConnection().manager.findOne(User, params);
    }


    public async getAll(user: User){
        return await getConnection().manager.find(User);
    }


    public async update(id: number, user: User){
        return await getRepository(User).update(id, user);
    }
    

    public async delete(userId: number){
        return await getRepository(User).delete(userId)
    }
}