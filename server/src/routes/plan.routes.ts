import { BaseRoute } from './base-route';
import { PlanController } from '../controllers';
import { Authentication } from '../core/middleware/authentication';

export class PlanRoutes extends BaseRoute {
    planController: PlanController;

    constructor() {
        super();
        this.planController = new PlanController();

        this.initRoutes();
    }


    initRoutes() {
        this.router.get('/plans', Authentication.isAuthenticated, (req, res, next) => this.planController.getPlans(req, res).catch(next));
    }
}
