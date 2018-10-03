import { Response } from 'express';
import { UnitImageRepository, UnitRepository } from '../repositories/'

export class UnitImageService {

    constructor(private unitImageRepository: UnitImageRepository, private unitRepository: UnitRepository) {}

    public async createUnitImage(res: Response, unitId: number, url: string) {

        const unitImage = await this.unitImageRepository.findOne({Url: url});

        if (unitImage) {
            return res.status(422).json({'errors': [{'msg': 'Unit Image already exists.'}]});
        }

        const unit = await this.unitRepository.findOne({UnitId: unitId});

        const newUnitImage = await this.unitRepository.create({Url: url, Unit: unit});

        return res.status(200).json(newUnitImage);

    }
}
