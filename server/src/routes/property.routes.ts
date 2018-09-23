import { BaseRoute } from './base-route';
import { PropertyController } from '../controllers';
import { Authentication } from '../core/middleware/authentication';

export class PropertyRoutes extends BaseRoute {
    propertyController: PropertyController;

    constructor() {
        super();
        this.propertyController = new PropertyController();

        this.initRoutes();
    }


    initRoutes() {
        this.router.get('/properties', (req, res, next) => this.propertyController.getProperties(req, res).catch(next));
        this.router.post('/properties',  (req, res, next) => this.propertyController.updateProperty(req, res).catch(next));
    }
}
