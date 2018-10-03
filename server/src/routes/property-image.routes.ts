import { BaseRoute } from './base-route';
import { PropertyImageController } from '../controllers';
import { Authentication } from '../core/middleware/authentication';

export class PropertyImageRoutes extends BaseRoute {
    propertyImageController: PropertyImageController;

    constructor() {
        super();
        this.propertyImageController = new PropertyImageController();

        this.initRoutes();
    }


    initRoutes() {
        this.router.post('/propertyimage/:id', Authentication.isAuthenticated, (req, res, next) => this.propertyImageController.createPropertyImage(req, res).catch(next));
        this.router.post('/propertyimage/upload', Authentication.isAuthenticated, (req, res, next) => this.propertyImageController.upload(req, res).catch(next));
    }
}
