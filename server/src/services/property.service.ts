import { Response } from 'express';
import { PropertyRepository, UnitRepository, PropertyFeaturesRepository } from "../repositories";
import { Property, PropertyFeatures } from '../entity';
import { NumberOfAutoScalingGroups } from 'aws-sdk/clients/autoscaling';

export class PropertyService {

    private propertyRepository: PropertyRepository;
    private unitRepository: UnitRepository;
    private propertyFeaturesRepository: PropertyFeaturesRepository;
    
    constructor() {
        this.propertyRepository = new PropertyRepository();
        this.unitRepository = new UnitRepository();
        this.propertyFeaturesRepository = new PropertyFeaturesRepository;
    }


    public async createProperty(res: Response, tenantId: number, type: number, street: string, aptsuite: string, city: string, state: string, zipcode: string, propertyFeatures: number[]) {
        const propertyExists = await this.propertyRepository.findOne({TenantId: tenantId, Street: street, City: city, State: state});
        
        if (propertyExists) {
            return res.status(422).json({'errors': [{'msg': 'Property already exists.'}]});
        }
        
        var PropertyFeatures: PropertyFeatures[] = [];
        for ( let pf of propertyFeatures ) {
            var _propertyFeature = await this.propertyFeaturesRepository.findOne({Id: pf});
            if (_propertyFeature) {
                PropertyFeatures.push(_propertyFeature);
            }
        }

        const newProperty = await this.propertyRepository.create({TenantId:tenantId, Type: type, Street: street, ApartmentSuite: aptsuite, City: city, State: state, Zipcode: zipcode, PropertyFeatures});

        return res.status(200).json(newProperty);
    }


    public async getProperties(tenantId: number) {
        const properties = await this.propertyRepository.find({ where: { TenantId: tenantId } });

        return properties;
    }


    public async updateProperty(res: Response, tenantId: number, id: number, type: number, street: string, aptsuite: string, city: string, state: string, zipcode: string, propertyFeatures: number[]) {
        
        var property = await this.propertyRepository.findOne({TenantId: tenantId, Id: id});

        if(!property) {
            return  res.status(422).json({'errors': [{'msg': 'Property Id is invalid.'}]})
        }
        property.Street = street;
        property.ApartmentSuite = aptsuite;
        property.City = city;
        property.State = state;
        property.Zipcode = zipcode;
        property.Type = type;

        var _propertyFeatures: PropertyFeatures[] = [];
        for ( let pf of propertyFeatures ) {
            var _propertyFeature = await this.propertyFeaturesRepository.findOne({Id: pf});
            if (_propertyFeature) {
                _propertyFeatures.push(_propertyFeature);
            }
        }

        property.PropertyFeatures = _propertyFeatures;
        
        var updatedProperty = await this.propertyRepository.save(property);
        return res.status(200).json(updatedProperty);
    }


    public async getPropertiesByTenant(res: Response, tenantId: number) {
        const properties = await this.propertyRepository.find({ where: { TenantId: tenantId } });
        return res.status(200).json(properties);
    }


    public async getPropertyWithRelations(res: Response, tenantId: number, id: number) {
        const property = await this.propertyRepository.findOne({ where: {Id: id}, relations: ["Units", "PropertyFeatures"] });
        return res.status(200).json(property);
    }


    public async deleteProperty(res: Response, tenantId: number, id: number) {
        const propertyExists = await this.propertyRepository.find({TenantId: tenantId, Id: id});
        
        if (!propertyExists) {
            return res.status(422).json({'errors': [{'msg': 'Property does not exist.'}]});
        }

        await this.propertyRepository.delete(id);

        return res.status(200).json({'msg': 'Removed property.'});
    }


    public async getPropertyTypes(res: Response, tenantId: number) {
        const properties = await this.propertyRepository.getPropertyTypes(tenantId);
        
        return res.status(200).json(properties);
    }

}
