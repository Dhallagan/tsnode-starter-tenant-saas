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

    public async createUnitImage(req: Request, res: Response) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
           return res.status(422).json({ errors: errors.array() });
        }
        
        return await this.unitImageService.createUnitImage(res, req.params.id, req.body.url);
    }

    public async upload(req: Request, res: Response) {
        return await this.unitImageService.upload(req, res);
    }
}
