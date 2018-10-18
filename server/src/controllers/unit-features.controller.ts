import { Response, Request } from 'express';
import { validationResult } from 'express-validator/check';
import { BaseController } from './base-controller';
import { UnitFeaturesService } from '../services/unit-features.service';

export class UnitFeaturesController extends BaseController{

    private unitFeaturesService: UnitFeaturesService

    constructor(){
        super();
        this.unitFeaturesService = new UnitFeaturesService();
    };


    public async getAllUnitFeatures(req: Request, res: Response) {
        
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        const unitId = req.params.id;

        return await this.unitFeaturesService.getAllUnitFeatures(res, unitId);
    }


    public async getUnitFeatures(req: Request, res: Response) {
        
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        const featuresId = req.params.featuresId;

        return await this.unitFeaturesService.getUnitFeatures(res, featuresId);

    }

    public async createUnitFeatures(req: Request, res: Response) {

        const errors = validationResult(req);
        
        if (!errors.isEmpty()) {
           return res.status(422).json({ errors: errors.array() });
        }

        const unitId = req.params.id;
        
        return await this.unitFeaturesService.createUnitFeatures(res, unitId, req.body);
    }

    public async updateUnitFeatures(req: Request, res: Response) {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
           return res.status(422).json({ errors: errors.array() });
        }

        const featuresId = req.params.featuresId;
        
        return await this.unitFeaturesService.updateUnitFeatures(res, featuresId, req.body);
    }

    public async deleteUnitFeatures(req: Request, res: Response) {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
           return res.status(422).json({ errors: errors.array() });
        }

        const featuresId = req.params.featuresId;
        
        return await this.unitFeaturesService.deleteUnitFeatures(res, featuresId);
    }

    public async getUnitFeaturesByTenantId(req: Request, res: Response){
        const errors = validationResult(req);
        const tenantId = req['tenant'];

        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        return await this.unitFeaturesService.getUnitFeaturesByTenantId(res, tenantId);
    }

}
