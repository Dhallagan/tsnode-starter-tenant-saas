import { BaseRoute } from './base-route';
import { UnitFeaturesController } from '../controllers';
import { Authentication } from '../core/middleware/authentication';

export class UnitFeaturesRoutes extends BaseRoute {
    unitFeaturesController: UnitFeaturesController;

    constructor() {
        super();
        this.unitFeaturesController = new UnitFeaturesController();

        this.initRoutes();
    }


    initRoutes() {
        this.router.get('/units/:id/features', Authentication.isAuthenticated, (req, res, next) => this.unitFeaturesController.getAllUnitFeatures(req, res).catch(next));
        this.router.get('/units/:id/features/:featuresId', Authentication.isAuthenticated, (req, res, next) => this.unitFeaturesController.getUnitFeatures(req, res).catch(next));
        this.router.put('/units/:id/features/:featuresId', Authentication.isAuthenticated, (req, res, next) => this.unitFeaturesController.updateUnitFeatures(req, res).catch(next));
        this.router.post('/units/:id/features', Authentication.isAuthenticated, (req, res, next) => this.unitFeaturesController.createUnitFeatures(req, res).catch(next));
        this.router.delete('/units/:id/features/:featuresId', Authentication.isAuthenticated, (req, res, next) => this.unitFeaturesController.deleteUnitFeatures(req, res).catch(next));
        this.router.get('/unitfeatures', Authentication.isAuthenticated, (req, res, next) => this.unitFeaturesController.getUnitFeaturesByTenantId(req, res).catch(next));
    }
}
