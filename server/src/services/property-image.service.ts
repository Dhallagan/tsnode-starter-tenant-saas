import { Response } from 'express';
import { PropertyImageRepository, PropertyRepository } from '../repositories';
import { Storage } from '../core/storage';

export class PropertyImageService {

    private propertyImageRepository: PropertyImageRepository;
    private propertyRepository: PropertyRepository;

    constructor() {
        this.propertyImageRepository = new PropertyImageRepository();
        this.propertyRepository = new PropertyRepository();
    }

    public async createPropertyImage(res: Response, propertyId: number, url: string) {
        const propertyImage = await this.propertyImageRepository.findOne({Url: url});
        if (propertyImage) {
            return res.status(422).json({'errors': [{'msg': 'Property Image already exists.'}]});
        }
        const property = await this.propertyRepository.findOne({PropertyId: propertyId});
        const newPropertyImage = await this.propertyRepository.create({Url: url, Property: property});
        return res.status(200).json(newPropertyImage);
    }

    public async upload(req, res: Response) {
        const s3 = new Storage();
        var fileName = await s3.uploadSingle(req, res);
        return res.status(200).json({'filename' : fileName})
    }
}
