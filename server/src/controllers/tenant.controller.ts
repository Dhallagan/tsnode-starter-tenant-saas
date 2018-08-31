import { Request, Response } from 'express';
import { BaseController } from './base-controller';
import { UserRepository } from '../repositories/user.repository';
import { TenantService } from '../services/Tenant.service';

export class TenantController extends BaseController {

    private tenantService: TenantService;
    private userRepository: UserRepository;

    constructor() {
        super();
        this.tenantService = new TenantService();
        //this.tenantRepository = new TenantRepository();
    }


    public async getTenants(req: Request, res: Response){
        const tenants = await this.tenantService.getTenants()
        console.log(tenants)
        if (tenants) {
            return res.status(200).json({Tenants: tenants});
        }
    }


    public async getTenantUsers(req: Request, res: Response){
      const id = req.params.id
      const tenantUsers = await this.tenantService.getTenantUsers(id)
      console.log(tenantUsers)
      if (tenantUsers) {
          return res.status(200).json({Users: tenantUsers});
      }
  }
}
