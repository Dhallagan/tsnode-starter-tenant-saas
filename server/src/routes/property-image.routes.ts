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
        this.router.get('/propertys/:id/images',Authentication.isAuthenticated, (req, res, next) => this.propertyImageController.getBuildingImages(req, res).catch(next))
        this.router.post('/propertys/:id/upload', Authentication.isAuthenticated, (req, res, next) => this.propertyImageController.uploadMultiple(req, res).catch(next));
        this.router.delete('/propertys/images/:imageKey', Authentication.isAuthenticated, (req, res, next) => this.propertyImageController.deletePropertyImage(req, res).catch(next));
        
        // client routes 
        this.router.get('/property/:id/images', (req, res, next) => this.propertyImageController.getBuildingImages(req, res).catch(next))

    }
}
