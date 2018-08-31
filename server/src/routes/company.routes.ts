import { BaseRoute } from './base-route';
import { CompanyController } from '../controllers/company.controller';
import { Authentication } from '../core/middleware/authentication';

export class CompanyRoutes extends BaseRoute {
    companyController: CompanyController;

    constructor() {
        super();
        this.companyController = new CompanyController();
        this.initRoutes();
    }


    initRoutes() {
        this.router.get('/company', Authentication.isAuthenticated, (req, res, next) => this.companyController.getCompany(req, res).catch(next));
        this.router.post('/company', Authentication.isAuthenticated, (req, res, next) => this.companyController.saveCompany(req, res).catch(next));
    }
}
