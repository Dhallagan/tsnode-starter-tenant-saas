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

    public async getAllBuildingImages(res: Response, buildingId: number) {
        const building = await this.propertyRepository.findOne({where: {Id: buildingId}, relations: ['PropertyImages']});
        if (building) {
            return building['PropertyImages'];
        } else {
            return null;;
        }
    }

    public async createPropertyImage(res: Response, propertyId: number, url: string,key:string) {
        const propertyImage = await this.propertyImageRepository.findOne({Url: url});
        if (propertyImage) {
            return res.status(422).json({'errors': [{'msg': 'Property Image already exists.'}]});
        }
        const property = await this.propertyRepository.findOne({Id: propertyId});
        const newPropertyImage = await this.propertyImageRepository.create({Url: url, Property: property,Key:key});
        return  newPropertyImage;
    }
    public async uploadMultiple(req: Request|any, res: Response) {
        const s3 = new Storage();
        const fileNames = await s3.uploadMultiple(req, res);
        const buildingId = req.params.id
        let images: any[] = []
        for(const file of fileNames){
            const image: any =  await this.createPropertyImage(res, buildingId, file.Url, file.Key)
            const  {Url, Key} = image
            images.push({Url, Key})
        }
        return res.status(200).json(images)
    }

    public async deleteImage(req: Request|any, res:Response) {
        const s3 = new Storage();
        const deleted =  await s3.deleteImage(req.params.imageKey)

        if (deleted) {
            const propertyImage = await this.propertyImageRepository.findOne({Key: req.params.imageKey});

            if (!propertyImage) {
                return res.status(422).json({'errors': [{'msg': 'image does not exist.'}]});
            }
            await this.propertyImageRepository.delete(propertyImage.Id);

            return res.status(200).json({'msg': 'Successfully image deleted'});
        }
    }
}
