import { Request, Response } from 'express';
import { BaseController } from './base-controller';
import { UserService } from '../services/user.service'

export class UserController extends BaseController {

    private userService: UserService;

    constructor() {
        super();
        this.userService = new UserService();
    }

    public async createUser(req: Request, res: Response) {
        //var user = await getConnection().query('SELECT * FROM property')
        //var user = await getConnection().manager.find(Property)

        const viewModel = { username: "test2wfd223", email: "test223@test.com", password: "asfdsf"}
        //viewModel.Username = trimString(viewModel.Username);
        //viewModel.Email = trimString(viewModel.Username);
        
        res.status(201).json(
            await this.userService.createUser(res, viewModel.email, viewModel.username, viewModel.password)
        );
    }

   public async getUser(req: Request, res: Response) {

        let { id } = req.params;
       res.status(200).json(
         await this.userService.getUserById(res, id)
       );
   }
}

