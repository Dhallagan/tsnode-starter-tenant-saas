import { Response, Request } from 'express';
import { validationResult } from 'express-validator/check';
import { BaseController } from './base-controller';
import {  PropertyImageService } from '../services/property-image.service';

export class PropertyImageController extends BaseController{

    private propertyImageService: PropertyImageService

    constructor(){
        super();
        this.propertyImageService = new PropertyImageService();
    };

    public async createPropertyImage(req: Request, res: Response) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
           return res.status(422).json({ errors: errors.array() });
        }
        
        return await this.propertyImageService.createPropertyImage(res, req.params.id, req.body.url);
    }

    public async upload(req: Request, res: Response) {
        return await this.propertyImageService.upload(req, res);
    }
}
