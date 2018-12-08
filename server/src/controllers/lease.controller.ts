import { Request, Response } from 'express';
import { BaseController } from './base-controller';
import { LeaseService } from '../services';
import { validationResult } from 'express-validator/check';

export class LeaseController extends BaseController {

    private leaseService: LeaseService;

    constructor() {
        super();
        this.leaseService = new LeaseService();
    }


    public async create(req: Request, res: Response){

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        const startDate = req.body.startDate;
        const endDate = req.body.endDate;
        const monthlyRent = req.body.monthlyRent;
        const securityDeposit = req.body.securityDeposit;
        const termType = req.body.termType;
        const unitId = req.body.unitId;
        const propertyId = req.body.propertyId;
        const resident = req.body.resident;

        return await this.leaseService.create(res, unitId, propertyId, startDate, endDate, monthlyRent, securityDeposit, termType, resident);
    }

}
