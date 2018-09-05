import { BaseRoute } from './base-route';
import { UserController } from '../controllers/user.controller';
import { Validation } from '../util/validation';
import { Authentication } from '../core/middleware/authentication';
import multer from 'multer'

const upload =  multer({ dest: './src/uploads/' })

export class UserRoutes extends BaseRoute {
    userController: UserController;


    constructor() {
        super();
        this.userController = new UserController();

        this.initRoutes();
    }


    initRoutes() {
        this.router.post('/register', Validation.forRegister, (req, res, next) => this.userController.register(req, res).catch(next));
        this.router.post('/verify', (req, res, next) => this.userController.verifyRegistration(req, res).catch(next));
        this.router.post('/login', Validation.forLogin, (req, res, next) => this.userController.login(req, res).catch(next));
        this.router.post('/recover', (req, res, next) => this.userController.recoverPassword(req, res).catch(next));
        this.router.post('/reset/:token', Validation.forReset, (req, res, next) => this.userController.resetPassword(req, res).catch(next));
        // this.router.put('/account/', Validation.forReset, (req, res, next) => this.userController.resetPassword(req, res).catch(next));
        this.router.put('/password/update', Validation.forReset, (req, res, next) => this.userController.updatePassword(req, res).catch(next));
        this.router.get('/users', (req, res, next) => this.userController.getUsers(req, res).catch(next));
        this.router.get('/users/token', Authentication.isAuthenticated, (req, res, next) => this.userController.getUserByToken(req, res).catch(next))
        this.router.get('/users/:id', (req, res, next) => this.userController.getUser(req, res).catch(next));
        this.router.post('/users/:id', (req, res, next) => this.userController.updateUser(req, res).catch(next));
        this.router.post('/users/:id/avatar', (req, res, next) => this.userController.updateAvatar(req, res).catch(next));
        this.router.post('/upload', (req, res, next) => this.userController.upload(req, res).catch(next));
        this.router.post('/invite', Authentication.isAuthenticated, (req, res, next) => this.userController.invite(req, res).catch(next));
    }
}
