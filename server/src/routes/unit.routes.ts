import { BaseRoute } from './base-route';
import { UnitController } from '../controllers';
import { Authentication } from '../core/middleware/authentication';

export class UnitRoutes extends BaseRoute {
    unitController: UnitController;

    constructor() {
        super();
        this.unitController = new UnitController();

        this.initRoutes();
    }


    initRoutes() {
        this.router.get('/properties/:id/units/:unitId', Authentication.isAuthenticated, (req, res, next) => this.unitController.getPropertyUnit(req, res).catch(next));
        this.router.get('/properties/:id/units/', Authentication.isAuthenticated, (req, res, next) => this.unitController.getPropertyUnits(req, res).catch(next));
        this.router.put('/properties/:id/units/:unitId', Authentication.isAuthenticated, (req, res, next) => this.unitController.updatePropertyUnit(req, res).catch(next));
        this.router.post('/properties/:id/units/', Authentication.isAuthenticated, (req, res, next) => this.unitController.createPropertyUnit(req, res).catch(next));
        this.router.delete('/properties/:id/units/:unitId', Authentication.isAuthenticated, (req, res, next) => this.unitController.deletePropertyUnit(req, res).catch(next));
    }
}
