import { BaseRoute } from './base-route';
import { PropertyFeaturesController } from '../controllers';
import { Authentication } from '../core/middleware/authentication';

export class PropertyFeaturesRoutes extends BaseRoute {
    propertyFeaturesController: PropertyFeaturesController;

    constructor() {
        super();
        this.propertyFeaturesController = new PropertyFeaturesController();

        this.initRoutes();
    }


    initRoutes() {
        this.router.get('/propertys/:id/features', Authentication.isAuthenticated, (req, res, next) => this.propertyFeaturesController.getAllPropertyFeatures(req, res).catch(next));
        this.router.get('/propertys/:id/features/:featuresId', Authentication.isAuthenticated, (req, res, next) => this.propertyFeaturesController.getPropertyFeatures(req, res).catch(next));
        this.router.put('/propertys/:id/features/:featuresId', Authentication.isAuthenticated, (req, res, next) => this.propertyFeaturesController.updatePropertyFeatures(req, res).catch(next));
        this.router.post('/propertys/:id/features', Authentication.isAuthenticated, (req, res, next) => this.propertyFeaturesController.createPropertyFeatures(req, res).catch(next));
        this.router.delete('/propertys/:id/features/:featuresId', Authentication.isAuthenticated, (req, res, next) => this.propertyFeaturesController.deletePropertyFeatures(req, res).catch(next));
    }
}
