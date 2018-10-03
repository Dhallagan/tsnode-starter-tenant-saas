import { BaseRoute } from './base-route';
import { UnitImageController } from '../controllers';
import { Authentication } from '../core/middleware/authentication';

export class UnitImageRoutes extends BaseRoute {
    unitImageController: UnitImageController;

    constructor() {
        super();
        this.unitImageController = new UnitImageController();

        this.initRoutes();
    }


    initRoutes() {
        this.router.post('/unitimage/:id', Authentication.isAuthenticated, (req, res, next) => this.unitImageController.createUnitImage(req, res).catch(next));
        this.router.post('/unitimage/upload', Authentication.isAuthenticated, (req, res, next) => this.unitImageController.upload(req, res).catch(next));
    }
}
