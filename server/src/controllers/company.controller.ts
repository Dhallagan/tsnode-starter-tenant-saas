import { Request, Response } from 'express';
import { BaseController } from './base-controller';
import { UserRepository } from '../repositories/user.repository';
import { CompanyService } from '../services/company.service';
import { check, validationResult } from 'express-validator/check';

export class CompanyController extends BaseController {

    private companyService: CompanyService;
    private userRepository: UserRepository;

    constructor() {
        super();
        this.companyService = new CompanyService();
        this.userRepository = new UserRepository();
    }


    public async getCompany(req: Request, res: Response){

        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        const user = await this.userRepository.getUserByIdWithRelations(req['user']);
        console.log(user);
        if (user) {
            return res.status(200).json({company: user.Tenant.Company});
        }
    }


    public async saveCompany(req: Request, res: Response){

        const viewModel = req.body;
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        const user = await this.userRepository.getUserByIdWithRelations(req['user'])
        if (user) {
            const company = user.Tenant.Company;
            if ( company == null ) {
                return await this.companyService.createCompany(res, viewModel, user.Tenant);
            }
            return await this.companyService.saveCompany(res, viewModel, company);
        }

    }

}
