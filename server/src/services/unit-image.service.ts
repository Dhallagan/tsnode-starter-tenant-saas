import { Request, Response } from 'express';
import { UnitImageRepository, UnitRepository } from '../repositories';
import { Storage } from '../core/storage';

export class UnitImageService {

    private unitImageRepository: UnitImageRepository;
    private unitRepository: UnitRepository;

    constructor() {
        this.unitImageRepository = new UnitImageRepository();
        this.unitRepository = new UnitRepository();
    }


    public async getAllUnitImages(res: Response, unitId: number) {
        const unit = await this.unitRepository.findOne({where: {UnitId: unitId}, relations: ['UnitImages']});
        if (unit) {
            return unit['UnitImages'];
        } else {
            return null;
        }
    }


    public async createUnitImage(res: Response, unitId: number, url: string, key: string) {

        const unitImage = await this.unitImageRepository.findOne({Url: url});
        if (unitImage) {
            return res.status(422).json({'errors': [{'msg': 'Unit Image already exists.'}]});
        }

        const unit = await this.unitRepository.findOne({UnitId: unitId});
        const newUnitImage = await this.unitImageRepository.create({Url: url, Unit: unit,Key:key});
        return newUnitImage;
    }


    public async uploadMultiple(req: Request, res: Response) {
        const s3 = new Storage();
        const fileNames = await s3.uploadMultiple(req, res);
        const unitId = req.params.id
        let images: any[] = []
        for(const file of fileNames){
            const image: any =  await this.createUnitImage(res, unitId, file.Url, file.Key)
            const  {Url, Key} = image
            images.push({Url, Key})
        }
        return res.status(200).json(images)
    }


    public async deleteImage(req: Request, res:Response) {
        const s3 = new Storage();
        const deleted =  await s3.deleteImage(req.params.imageKey)

        if (deleted) {
            const unitImage = await this.unitImageRepository.findOne({Key: req.params.imageKey});

            if (!unitImage) {
                return res.status(422).json({'errors': [{'msg': 'image does not exist.'}]});
            }
            await this.unitImageRepository.delete(unitImage.Id);

            return res.status(200).json({'msg': 'Successfully image deleted'});
        }
    }
}
