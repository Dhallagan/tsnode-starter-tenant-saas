import { Request, Response } from 'express';
import { BaseController } from './base-controller';
import * as Database from '../core/database'

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

    public async welcomeResidents(req: Request, res: Response) {
        let residents

        try {
         //residents = await this.Database.getAllResidents();
        } catch (error) {
        // ...
        }
      
        //getAllResidents()
        // Greet the given name
        res.send('Hello, ' + name);
    }
}

