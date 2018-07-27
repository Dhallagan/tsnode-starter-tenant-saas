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

    public async createUser(req: Request, res: Response) {
        const viewModel = req.body;

        //check(viewModel.email, 'Email is not valid').isEmail();
       // check(viewModel.password, 'Password cannot be blank').isLength({ min: 5 });

        const errors = validationResult(req);
        console.log(errors.array())
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        console.log(req.body)
        res.status(201).json(
            await this.userService.createUser(res, viewModel.username, viewModel.email, viewModel.password)
        );
    }

   public async getUser(req: Request, res: Response) {

        let { id } = req.params;
        res.status(200).json(
            await this.userService.getUserById(res, id)
       );
   }
}

