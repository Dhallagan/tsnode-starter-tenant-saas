import { Request, Response } from 'express';
import { BaseController } from './base-controller';
import { UserService } from '../services/user.service'
import { check, validationResult } from 'express-validator/check';


export class UserController extends BaseController {

    private userService: UserService;

    constructor() {
        super();
        this.userService = new UserService();
    }

    public async register(req: Request, res: Response) {
        const viewModel = req.body;

        const errors = validationResult(req);
     
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        res.status(201).json(
            await this.userService.createUser(res, viewModel.username, viewModel.email, viewModel.password)
        );
    }

   public async login(req: Request, res: Response) {
        const viewModel = req.body;

        res.status(201).json(
            await this.userService.login(res, viewModel.email, viewModel.password)
        );;
   }
}

