// import { BaseRoute } from './base-route';
// import { UploadController } from '../controllers/user.controller';
// import { Validation } from '../util/validation';
// import { Authentication } from '../core/middleware/authentication';
// export class UploadRoutes extends BaseRoute {
//     userController: UploadController;


//     constructor() {
//         super();
//         this.userController = new UploadController();

//         this.initRoutes();
//     }


//     initRoutes() {
//         //this.router.post('/upload', (req, res, next) => this.userController.upload(req, res).catch(next));
//         this.router.post('/uploadMultiple', (req, res, next) => this.userController.uploadMultiple(req, res).catch(next));
//     }
// }
