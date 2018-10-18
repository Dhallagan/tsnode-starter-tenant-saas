import { Response } from 'express';
import { UnitFeaturesRepository, UnitRepository } from '../repositories';

export class UnitFeaturesService {

    private unitFeaturesRepository: UnitFeaturesRepository;
    private unitRepository: UnitRepository;


    constructor() {
        this.unitFeaturesRepository = new UnitFeaturesRepository();
        this.unitRepository = new UnitRepository();
    }


    public async createUnitFeatures(res: Response, unitId: number, ViewModel: any) {

        const unit = await this.unitRepository.findOne({UnitId: unitId});
        const newUnitFeatures = await this.unitFeaturesRepository.create({...ViewModel, Unit: unit});
        return res.status(200).json(newUnitFeatures);
    }


    public async getUnitFeatures(res: Response, id: number) {

        const unitFeatures = await this.unitFeaturesRepository.findOne(id);
        if (!unitFeatures) {
            return res.status(422).json({'errors': [{'msg': 'Unit Feature not exists.'}]});
        }

        return res.status(200).json(unitFeatures);
    }


    public async getAllUnitFeatures(res: Response, unitId: number) {

        const unit = await this.unitRepository.findOne({ where: {UnitId: unitId}, relations: ["UnitFeatures"] });
        if (!unit) {
            return res.status(422).json({'errors': [{'msg': 'Unit not exists.'}]});
        }

        return res.status(200).json(unit.UnitFeatures);
    }
    

    public async updateUnitFeatures(res: Response, id: number, ViewModel: any) {
        
        const unitFeatures = await this.unitFeaturesRepository.findOne(id);
        if (!unitFeatures) {
            return res.status(422).json({'errors': [{'msg': 'Unit Feature not exists.'}]});
        }

        Object.assign(unitFeatures, ViewModel);
        await this.unitFeaturesRepository.save(unitFeatures);
        return res.status(200).json({'msg': 'Unit Feature successfully updated.'});
    }


    public async deleteUnitFeatures(res: Response, id: number) {
        const unitFeatures = await this.unitFeaturesRepository.findOne(id);

        if (!unitFeatures) {
            return res.status(422).json({'errors': [{'msg': 'The Unit Features does not exist.'}]});
        }

        await this.unitFeaturesRepository.delete(id);

        return res.status(200).json({'msg': 'Successfully removed the unit features.'});
    }

    public async getUnitFeaturesByTenantId(res: Response, tenantId: number) {

        const unitFeatures = await this.unitFeaturesRepository.find({TenantId: tenantId});
        if (!unitFeatures) {
            return res.status(422).json({'errors': [{'msg': 'Unit Features not exists.'}]});
        }

        return res.status(200).json(unitFeatures);
    }
}
