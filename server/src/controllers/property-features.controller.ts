import { Response, Request } from 'express';
import { validationResult } from 'express-validator/check';
import { BaseController } from './base-controller';
import { PropertyFeaturesService } from '../services/property-features.service';

export class PropertyFeaturesController extends BaseController{

    private propertyFeaturesService: PropertyFeaturesService

    constructor(){
        super();
        this.propertyFeaturesService = new PropertyFeaturesService();
    };

    public async getAllPropertyFeatures(req: Request, res: Response) {
        
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        const propertyId = req.params.id;

        return await this.propertyFeaturesService.getAllPropertyFeatures(res, propertyId);
    }


    public async getPropertyFeatures(req: Request, res: Response) {
        
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        const featuresId = req.params.featuresId;

        return await this.propertyFeaturesService.getPropertyFeatures(res, featuresId);

    }

    public async createPropertyFeatures(req: Request, res: Response) {

        const errors = validationResult(req);
        
        if (!errors.isEmpty()) {
           return res.status(422).json({ errors: errors.array() });
        }
        
        return await this.propertyFeaturesService.createPropertyFeatures(res, req.params.id, req.body);
    }

    public async updatePropertyFeatures(req: Request, res: Response) {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
           return res.status(422).json({ errors: errors.array() });
        }
        
        return await this.propertyFeaturesService.updatePropertyFeatures(res, req.params.id, req.body);
    }

    public async deletePropertyFeatures(req: Request, res: Response) {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
           return res.status(422).json({ errors: errors.array() });
        }
        
        return await this.propertyFeaturesService.deletePropertyFeatures(res, req.params.id);
    }

}
