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
        this.router.get('/properties/:id',  Authentication.isAuthenticated, (req, res, next) => this.propertyController.getProperty(req, res).catch(next));
        this.router.get('/properties', Authentication.isAuthenticated, (req, res, next) => this.propertyController.getProperties(req, res).catch(next));
        this.router.post('/properties', Authentication.isAuthenticated, (req, res, next) => this.propertyController.createProperty(req, res).catch(next));
        this.router.put('/properties/:id', Authentication.isAuthenticated, (req, res, next) => this.propertyController.updateProperty(req, res).catch(next));
        this.router.delete('/properties/:id', Authentication.isAuthenticated, (req, res, next) => this.propertyController.deleteProperty(req, res).catch(next));
        this.router.get('/propertytypes', Authentication.isAuthenticated, (req, res, next) => this.propertyController.getPropertyTypes(req, res).catch(next));
    }
}
