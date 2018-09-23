import { Response } from 'express';
import { PropertyRepository } from "../repositories";
import { Property } from '../entity/Property';

export class PropertyService {

    private propertyRepository: PropertyRepository;
    
    constructor() {
        this.propertyRepository = new PropertyRepository();
    }


    public async createProperty(res: Response, tenantId: number, type: string, street: string, aptsuite: string, city: string, state: string, zipcode: string) {
        const propertyExists = await this.propertyRepository.findOne({TenantId: tenantId, Street: street, City: city, State: state});
        
        if (propertyExists) {
            return res.status(422).json({'errors': [{'msg': 'Property already exists.'}]});
        }

        const newProperty = await this.propertyRepository.create({TenantId:tenantId, Type: type, Street: street, ApartmentSuite: aptsuite, City: city, State: state, Zipcode: zipcode});

        return res.status(200).json(newProperty);
    }


    public async getProperties(tenantId: number) {
        const properties = await this.propertyRepository.findAll();
        console.log(properties)
        return properties;
    }


    public async updateProperty(res: Response, tenantId: number, id: number, type: string, street: string, aptsuite: string, city: string, state: string, zipcode: string) {
        
        var property = await this.propertyRepository.findOne({Id: id});

        if(!property) {
            return  res.status(422).json({'errors': [{'msg': 'Property Id is invalid.'}]})
        }

        property.Street = name;
        property.ApartmentSuite = aptsuite;
        property.City = city;
        property.State = state;
        property.Zipcode = zipcode;
        property.Type = type;
        
        var updatedProperty = await this.propertyRepository.update(id, property);
        return res.status(200).json(updatedProperty);
    }


    public async getPropertiesByTenant(res: Response, tenantId: number) {
        const properties = await this.propertyRepository.getPropertiesByTenant(tenantId);
        return res.status(200).json(properties);
    }


    public async getPropertyWithRelations(res: Response, tenantId: number, id: number) {
        const property = await this.propertyRepository.getPropertyWithRelations(id);
        return res.status(200).json(property);
    }


    public async deleteProperty(res: Response, tenantId: number, id: number) {
        const property = await this.propertyRepository.delete(id);
        return res.status(200).json({'msg': 'Removed property.'});
    }

}
