import { Request, Response } from 'express';
import { BaseController } from './base-controller';

export class WelcomeController extends BaseController {

    constructor() {
        super();
    }

    public async welcome(req: Request, res: Response) {
        res.send('Hello, World!');
    }

    public async welcomePerson(req: Request, res: Response) {
        // Extract the name from the request parameters
        let { name } = req.params;

        // Greet the given name
        res.send('Hello, ' + name);
    }
}

