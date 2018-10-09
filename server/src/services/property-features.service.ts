import { Response } from 'express';
import { PropertyFeaturesRepository, PropertyRepository } from '../repositories';

export class PropertyFeaturesService {

    private propertyFeaturesRepository: PropertyFeaturesRepository;
    private propertyRepository: PropertyRepository;


    constructor() {
        this.propertyFeaturesRepository = new PropertyFeaturesRepository();
        this.propertyRepository = new PropertyRepository();
    }

    public async getPropertyFeatures(res: Response, id: number) {

        const propertyFeatures = await this.propertyFeaturesRepository.findOne(id);
        if (!propertyFeatures) {
            return res.status(422).json({'errors': [{'msg': 'Property Feature not exists.'}]});
        }

        return res.status(200).json(propertyFeatures);
    }


    public async getAllPropertyFeatures(res: Response, propertyId: number) {

        const property = await this.propertyRepository.findOne({ where: {PropertyId: propertyId}, relations: ["PropertyFeatures"] });
        if (!property) {
            return res.status(422).json({'errors': [{'msg': 'Property not exists.'}]});
        }

        return res.status(200).json(property.PropertyFeatures);
    }


    public async createPropertyFeatures(res: Response, propertyId: number, ViewModel: any) {

        const property = await this.propertyRepository.findOne({PropertyId: propertyId});
        const newPropertyFeatures = await this.propertyFeaturesRepository.create({...ViewModel, Property: property});
        return res.status(200).json(newPropertyFeatures);
    }
    

    public async updatePropertyFeatures(res: Response, id: number, ViewModel: any) {
        
        const propertyFeatures = await this.propertyFeaturesRepository.findOne(id);
        if (!propertyFeatures) {
            return res.status(422).json({'errors': [{'msg': 'Property Feature not exists.'}]});
        }

        Object.assign(propertyFeatures, ViewModel);
        await this.propertyFeaturesRepository.save(propertyFeatures);
        return res.status(200).json({'msg': 'Property Feature successfully updated.'});
    }


    public async deletePropertyFeatures(res: Response, id: number) {
        const propertyFeatures = await this.propertyFeaturesRepository.findOne(id);

        if (!propertyFeatures) {
            return res.status(422).json({'errors': [{'msg': 'The Property Features does not exist.'}]});
        }

        await this.propertyFeaturesRepository.delete(id);

        return res.status(200).json({'msg': 'Successfully removed the property features.'});
    }

}
