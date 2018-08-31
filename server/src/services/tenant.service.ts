import { Response } from 'express';
import { TenantRepository } from "../repositories/tenant.repository";
import { v4 as UUId } from 'uuid';
import { User } from "../entity/User";
import { UserRepository } from '../repositories/user.repository';


export class TenantService {

    private tenantRepository: TenantRepository;


    constructor() {
        this.tenantRepository = new TenantRepository();
    }

    
    public async createTenant(domain: string) {
        const tenantExists = await this.tenantRepository.getTenantByDomain(domain);

        if (tenantExists) {
            return tenantExists;
        }

        const tenant = await this.tenantRepository.createTenant(domain);
        console.log(tenant);

        return tenant;
    }


    public async getTenants() {
        const tenants = await this.tenantRepository.getTenants();
        console.log(tenants);

        return tenants;
    }


    public async getTenantUsers(id: number) {
        const tenantUsers = await this.tenantRepository.getTenantUsers(id);
        console.log(tenantUsers);

        return tenantUsers;
    }

}
