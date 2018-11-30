import { Request, Response } from 'express';
import { BaseController } from './base-controller';
import { ApplicationStatusTypeService } from '../services';

export class ApplicationStatusTypeController extends BaseController {

    private applicantionStatusTypeService: ApplicationStatusTypeService;

    constructor() {
        super();
        this.applicantionStatusTypeService = new ApplicationStatusTypeService();
    }


    public async getApplicationStatusTypes(req: Request, res: Response){

        return await this.applicantionStatusTypeService.getApplicationStatusTypes(res);
    }

}
