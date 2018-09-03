import { EntityRepository, Repository, getRepository } from "typeorm";
import { getConnection } from "typeorm";
import { Tenant } from "../entity";


@EntityRepository(Tenant)
export class TenantRepository extends Repository<Tenant> {


    public async createTenant(domain: string, plan){
        return await getConnection().manager.save(Tenant, {Domain: domain, Plan: plan});
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


    public async updateTenant(tenant: Tenant){
        return await getRepository(Tenant).save(tenant);
    }

    public async getTenantUsers(id: number){
        const tenant = await this.getTenantById(id);
        if(tenant)
            return tenant.Users;
    }

    public async getTenantPlan(id: number) {
        const tenant = await this.getTenantById(id);
        if(tenant)
            return tenant.Plan;
    }
}