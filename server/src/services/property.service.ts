import { Response } from 'express';
import { PropertyRepository } from "../repositories";
import { Property } from '../entity/Property';

export class PropertyService {

    private propertyRepository: PropertyRepository;
    
    constructor() {
        this.propertyRepository = new PropertyRepository();
    }


    public async createProperty(res: Response, street: string, aptsuite: string, city: string, state: string, zipcode: string) {

        const propertyExists = await this.propertyRepository.getSingleProperty({Street: street, City: city, State: state});
        
        if (propertyExists) {
            return res.status(422).json({'errors': [{'msg': 'Property already exists.'}]});
        }

        const newProperty = await this.propertyRepository.createProperty({Street: street, ApartmentSuite: aptsuite, City: city, State: state, Zipcode: zipcode});

        return res.json(200).json(newProperty);
    }



    public async getProperties() {
        
        const properties = await this.propertyRepository.getProperties();

        return properties;
    }




    public async updateProperty(res: Response, id: number, street: string, aptsuite: string, city: string, state: string, zipcode: string) {
        
        var property = await this.propertyRepository.getSingleProperty({Id: id});
        if(!property) {
            return  res.status(422).json({'errors': [{'msg': 'Property Id is invalid.'}]})
        }

        property.Street = name;
        property.ApartmentSuite = aptsuite;
        property.City = city;
        property.State = state;
        property.Zipcode = zipcode;
        
        var updatedProperty = await this.propertyRepository.updateProperty(id, property);
        return res.status(200).json(updatedProperty);
    }

}
