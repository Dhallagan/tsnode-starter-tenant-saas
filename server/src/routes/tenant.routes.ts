import { BaseRoute } from './base-route';
import { TenantController } from '../controllers/tenant.controller';
import { Authentication } from '../core/middleware/authentication';

export class TenantRoutes extends BaseRoute {
    tenantController: TenantController;

    constructor() {
        super();
        this.tenantController = new TenantController();

        this.initRoutes();
    }


    initRoutes() {
        this.router.get('/tenants',(req, res, next) => this.tenantController.getTenants(req, res).catch(next));
        this.router.get('/tenants/:id/users', (req, res, next) => this.tenantController.getTenantUsers(req, res).catch(next));
    }
}
