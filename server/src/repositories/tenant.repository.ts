import { Request, Response } from 'express';
import moment from 'moment';
import { EntityRepository, Repository, getRepository, createQueryBuilder } from "typeorm";
import { getConnection } from "typeorm";
import { Tenant } from "../entity/Tenant";
import { User } from '../entity/User';


@EntityRepository(Tenant)
export class TenantRepository extends Repository<Tenant> {


    public async createTenant(domain: string){
        return await getConnection().manager.save(Tenant, {Domain: domain});
    }


    public async getTenantByDomain(domain: string){
        return await getConnection().manager.findOne(Tenant, {Domain: domain});
    }


    public async getTenantById(id: number){
        return await getConnection().manager.findOne(Tenant, {Id: id});
    }


    public async getTenants(){
        return await getConnection().manager.find(Tenant);
    }


    public async saveTenant(tenant: Tenant) {
        return await getConnection().manager.save(Tenant, tenant);
    }


    public async updateTenant(id: number, tenant: Tenant){
        return await getRepository(Tenant).update(id, tenant);
    }

    public async getTenantUsers(id: number){
        return await getConnection().manager.query("SELECT * FROM user WHERE user.tenantId = " + id);
    }
}