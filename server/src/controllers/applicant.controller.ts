import { Request, Response } from 'express';
import { BaseController } from './base-controller';
import { ApplicantService } from '../services';
import { validationResult } from 'express-validator/check';

export class ApplicantController extends BaseController {

    private applicantService: ApplicantService;

    constructor() {
        super();
        this.applicantService = new ApplicantService();
    }


    public async getApplicant(req: Request, res: Response){

        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        const id = req.params.id;
        return await this.applicantService.getApplicant(res, id);
    }


    public async getApplicants(req: Request, res: Response){

        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        return await this.applicantService.getApplicants(res);
    }


    public async createApplicant(req: Request, res: Response){

        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        const viewModel = req.body;
        return await this.applicantService.getApplicant(res, viewModel);
    }

    
    public async updateApplicant(req: Request, res: Response){

        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        const id = req.params.id;
        const viewModel = req.body;
        return await this.applicantService.updateApplicant(res, id, viewModel);
    }


    public async deleteApplicant(req: Request, res: Response) {

        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        const id = req.params.id;
        return await this.applicantService.deleteApplicant(res, id);
    }

}
