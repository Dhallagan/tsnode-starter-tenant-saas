import { BaseRoute } from './base-route';
import { LeaseController } from '../controllers';
import { Authentication } from '../core/middleware/authentication';

export class LeaseRoutes extends BaseRoute {
    leaseController: LeaseController;

    constructor() {
        super();
        this.leaseController = new LeaseController();
        this.initRoutes();
    }


    initRoutes() {
        this.router.post('/create-lease', Authentication.isAuthenticated, (req, res, next) => this.leaseController.create(req, res).catch(next));
    }
}
