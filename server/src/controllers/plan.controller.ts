import { Request, Response } from 'express';
import { BaseController } from './base-controller';
import { PlanService } from '../services';

export class PlanController extends BaseController {

    private planService: PlanService;

    constructor() {
        super();
        this.planService = new PlanService();
    }


    public async getPlans(req: Request, res: Response){

        const plans = await this.planService.getPlans();
        
        if (plans)
            return res.status(200).json({Plans: plans});
    }

}
