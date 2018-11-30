import { BaseRoute } from './base-route';
import { ApplicationStatusTypeController } from '../controllers';

export class ApplicationStatusTypeRoutes extends BaseRoute {
    applicationStatusTypeControllerController: ApplicationStatusTypeController;

    constructor() {
        super();
        this.applicationStatusTypeControllerController = new ApplicationStatusTypeController();

        this.initRoutes();
    }


    initRoutes() {
        this.router.get('/application-status-types', (req, res, next) => this.applicationStatusTypeControllerController.getApplicationStatusTypes(req, res).catch(next));
    }
}
