import { BaseRoute } from './base-route';
import { UserController } from '../controllers/user.controller';
import { Validation } from '../util/validation'
import { Authentication } from '../core/middleware/Authentication'


export class UserRoutes extends BaseRoute {
    userController: UserController;

    constructor() {
        super();
        this.userController = new UserController();
        this.initRoutes();
    }

    initRoutes() {
        this.router.post('/register', Validation.forRegister, (req, res, next) => this.userController.register(req, res).catch(next));
        
        this.router.post('/login', Validation.forLogin, (req, res, next) => this.userController.login(req, res).catch(next));

        this.router.post('/auth', Authentication.isAuthenticated, Validation.forLogin, (req, res, next) => this.userController.auth(req, res).catch(next));
    }
}
