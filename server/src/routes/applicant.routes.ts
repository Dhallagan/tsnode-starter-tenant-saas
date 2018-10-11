import { BaseRoute } from './base-route';
import { ApplicantController } from '../controllers';

export class ApplicantRoutes extends BaseRoute {
    applicantController: ApplicantController;

    constructor() {
        super();
        this.applicantController = new ApplicantController();
        this.initRoutes();
    }


    initRoutes() {
        this.router.get('/applicants', (req, res, next) => this.applicantController.getApplicants(req, res).catch(next));
        this.router.get('/applicants/:id', (req, res, next) => this.applicantController.getApplicant(req, res).catch(next));
        this.router.post('/applicants/:id', (req, res, next) => this.applicantController.createApplicant(req, res).catch(next));
        this.router.put('/applicants/:id', (req, res, next) => this.applicantController.updateApplicant(req, res).catch(next));
        this.router.delete('/applicants/:id', (req, res, next) => this.applicantController.deleteApplicant(req, res).catch(next));
    }
}
