import { BaseRoute } from './base-route';
import { UserController } from '../controllers/user.controller';
import { Validation } from '../util/validation'


export class UserRoutes extends BaseRoute {
    userController: UserController;

    constructor() {
        super();
        this.userController = new UserController();
        this.initRoutes();
    }

    initRoutes() {
        this.router.post('/register', Validation.forRegister, (req, res, next) => this.userController.createUser(req, res).catch(next));
        
          this.router.get('/user/:id', (req, res, next) => this.userController.getUser(req, res).catch(next));
    }
}
