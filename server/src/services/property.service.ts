import { Response } from 'express';
import { PropertyRepository } from "../repositories";
import { UnitRepository } from "../repositories";
import { Property } from '../entity/Property';
import { NumberOfAutoScalingGroups } from 'aws-sdk/clients/autoscaling';

export class PropertyService {

    private propertyRepository: PropertyRepository;
    private unitRepository: UnitRepository;
    
    constructor() {
        this.propertyRepository = new PropertyRepository();
        this.unitRepository = new UnitRepository();
    }


    public async createProperty(res: Response, tenantId: number, type: number, street: string, aptsuite: string, city: string, state: string, zipcode: string) {
        const propertyExists = await this.propertyRepository.findOne({TenantId: tenantId, Street: street, City: city, State: state});
        
        if (propertyExists) {
            return res.status(422).json({'errors': [{'msg': 'Property already exists.'}]});
        }

        const newProperty = await this.propertyRepository.create({TenantId:tenantId, Type: type, Street: street, ApartmentSuite: aptsuite, City: city, State: state, Zipcode: zipcode});

        return res.status(200).json(newProperty);
    }


    public async getProperties(tenantId: number) {
        const properties = await this.propertyRepository.find({ where: { TenantId: tenantId } });

        return properties;
    }


    public async updateProperty(res: Response, tenantId: number, id: number, type: number, street: string, aptsuite: string, city: string, state: string, zipcode: string) {
        
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
        
        var updatedProperty = await this.propertyRepository.update(id, property);
        return res.status(200).json(updatedProperty);
    }


    public async getPropertiesByTenant(res: Response, tenantId: number) {
        const properties = await this.propertyRepository.find({ where: { TenantId: tenantId } });
        return res.status(200).json(properties);
    }


    public async getPropertyWithRelations(res: Response, tenantId: number, id: number) {
        const property = await this.propertyRepository.findOne({ where: {Id: id}, relations: ["Units"] });
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


    public async createPropertyUnit(res: Response, tenantId: number, propertyId: number, unitNumber: string, bedrooms: number, baths: number, sqFt: number, smoking: boolean, garage: boolean) {
        const propertyExists = await this.unitRepository.findOne({TenantId: tenantId, Property: propertyId, UnitNumber: unitNumber, Bedrooms: bedrooms, Baths: baths, SqFt: sqFt, Smoking: smoking, Garage: garage});
        
        if (propertyExists) {
            return res.status(422).json({'errors': [{'msg': 'Unit already exists.'}]});
        }

        const newProperty = await this.unitRepository.create({TenantId: tenantId, Property: propertyId, UnitNumber: unitNumber, Bedrooms: bedrooms, Baths: baths, SqFt: sqFt, Smoking: smoking, Garage: garage});

        return res.status(200).json(newProperty);
    }


    public async getPropertyUnits(res: Response, tenantId: number, propertyId: number) {

        const propertyUnits = await this.unitRepository.find({ TenantId: tenantId, Property: propertyId });

        return res.status(200).json({ Units: propertyUnits });
    }


    public async getPropertyUnit(res: Response, tenantId: number, propertyId: number, unitId: number) {

        const propertyUnit = await this.unitRepository.findOne({ where: { TenantId: tenantId, Property: propertyId, UnitId: unitId } });

        return res.status(200).json({ Unit: propertyUnit });
    }


    public async updatePropertyUnit(res: Response, tenantId: number, propertyId: number, unitId: number, unitNumber: string, bedrooms: number, baths: number, sqFt: number, smoking: boolean, garage: boolean) {
        const unit = await this.unitRepository.findOne({TenantId: tenantId, Property: propertyId, UnitId: unitId});
        
        if (!unit) {
            return res.status(422).json({'errors': [{'msg': 'Unit not found.'}]});
        }

        unit.UnitNumber = unitNumber;
        unit.Bedrooms = bedrooms;
        unit.Baths = baths;
        unit.SqFt= sqFt;
        unit.Smoking = smoking;
        unit.Garage = garage;

        await this.unitRepository.update(unitId, unit);

        return res.status(200).json({ Unit: unit });
    }


    public async deletePropertyUnit(res: Response, tenantId: number, propertyId: number, unitId: number) {

        const propertyUnit = await this.unitRepository.findOne({ where: { TenantId: tenantId, PropertyId: propertyId, UnitId: unitId } });

        if (!propertyUnit) {
            return res.status(422).json({'errors': [{'msg': 'Unit does not exist.'}]});
        }

        await this.unitRepository.delete(unitId);

        return res.status(200).json({'msg': 'Successfully removed property unit.'});
    }
}
