import { Response } from 'express';
import { UnitImageRepository, UnitRepository } from '../repositories';
import { Storage } from '../core/storage';

export class UnitImageService {

    private unitImageRepository: UnitImageRepository;
    private unitRepository: UnitRepository;

    constructor() {
        this.unitImageRepository = new UnitImageRepository();
        this.unitRepository = new UnitRepository();
    }

    public async createUnitImage(res: Response, unitId: number, url: string) {
        const unitImage = await this.unitImageRepository.findOne({Url: url});
        if (unitImage) {
            return res.status(422).json({'errors': [{'msg': 'Unit Image already exists.'}]});
        }
        const unit = await this.unitRepository.findOne({UnitId: unitId});
        const newUnitImage = await this.unitImageRepository.create({Url: url, Unit: unit});
        return res.status(200).json(newUnitImage);
    }

    public async upload(req, res: Response) {
        const s3 = new Storage();
        var fileName = await s3.uploadSingle(req, res);
        return res.status(200).json({'filename' : fileName})
    }
}
