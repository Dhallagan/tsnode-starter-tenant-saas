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

    public async getBuildingImages (req: Request, res: Response) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
           return res.status(422).json({ errors: errors.array() });
        }
        const buildingId = req.params.id;
        const buildingImages =  await this.propertyImageService.getAllBuildingImages(res, buildingId);
        if (buildingImages) {
            return res.status(200).json(buildingImages);
        } else {
            return res.status(422).json({'errors': [{'msg': 'Unit does not exist.'}]});
        }
        
    }
    public async uploadMultiple(req: Request, res: Response) {
        return await this.propertyImageService.uploadMultiple(req, res);
    }
    public async deletePropertyImage(req: Request, res: Response){
        return await this.propertyImageService.deleteImage(req, res);

    }



}
