import { Response, Request } from 'express';
import { validationResult } from 'express-validator/check';
import { BaseController } from './base-controller';
import {  UnitImageService } from '../services/unit-image.service';

export class UnitImageController extends BaseController{

    private unitImageService: UnitImageService

    constructor(){
        super();
        this.unitImageService = new UnitImageService();
    };

    public async getUnitImages(req: Request, res: Response) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
           return res.status(422).json({ errors: errors.array() });
        }
        const unitId = req.params.id;
        return await this.unitImageService.getAllUnitImages(res, unitId);
        
    }



    public async uploadMultiple(req: Request, res: Response) {
        const unitId = req.params.id;
        return await this.unitImageService.uploadMultiple(req, res);
    }


    public async deleteUnitImage(req: Request, res: Response){
        return await this.unitImageService.deleteImage(req, res);

    }
}
