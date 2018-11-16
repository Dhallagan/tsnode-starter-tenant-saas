import { BaseRoute } from './base-route';
import { PropertyImageController } from '../controllers';
import { Authentication } from '../core/middleware/authentication';

export class PropertyImageRoutes extends BaseRoute {
    propertyImageController: PropertyImageController;

    constructor() {
        super();
        this.propertyImageController = new PropertyImageController();

        // this.initRoutes();
    }


    // initRoutes() {
    //     this.router.get('/propertys/:id/images', (req, res, next) => this.propertyImageController.getUnitImages(req, res).catch(next))
    //     this.router.post('/propertys/:id/images', Authentication.isAuthenticated, (req, res, next) => this.propertyImageController.createUnitImage(req, res).catch(next));
    //     // Is the upload route necessary... I can't quite remember...
    //     this.router.post('/propertys/upload', Authentication.isAuthenticated, (req, res, next) => this.propertyImageController.uploadMultiple(req, res).catch(next));
    //     this.router.delete('/propertys/:id/images/:imageId', Authentication.isAuthenticated, (req, res, next) => this.propertyImageController.createUnitImage(req, res).catch(next));
    // }
}
