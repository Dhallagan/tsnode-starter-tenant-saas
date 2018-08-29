import { Request, Response } from 'express';
import moment from 'moment';
import { EntityRepository, Repository, getRepository, MoreThan } from "typeorm";
import { getConnection } from "typeorm";
import { Tenant } from "../entity/Tenant";


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
}