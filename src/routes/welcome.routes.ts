import { WelcomeController } from '../controllers/welcome.controller';
import { BaseRoute } from './base-route';

export class WelcomeRoutes extends BaseRoute {
    welcomeController: WelcomeController;

    constructor() {
        super();
        this.welcomeController = new WelcomeController();
        this.initRoutes();
    }

    initRoutes() {
        this.router.get('/welcome', (req, res, next) => this.welcomeController.welcome(req, res).catch(next));
        this.router.get('/welcome/:name', (req, res, next) => this.welcomeController.welcomePerson(req, res).catch(next));
    }
}
