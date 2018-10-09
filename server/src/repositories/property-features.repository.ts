import { EntityRepository, getRepository } from "typeorm";
import { PropertyFeatures } from "../entity";

@EntityRepository(PropertyFeatures)
export class PropertyFeaturesRepository {


    public async create(propertyFeatures: Object){
        return await getRepository(PropertyFeatures).save(propertyFeatures);
    }


    public async findOne(params: Object){
        return await getRepository(PropertyFeatures).findOne(params);
    }


    public async find(params: Object){
        return await getRepository(PropertyFeatures).find(params);
    }


    public async save(propertyFeatures: PropertyFeatures){
        return await getRepository(PropertyFeatures).save(propertyFeatures)
    }


    public async delete(id: number){
        return await getRepository(PropertyFeatures).delete(id)
    }

    public async update(id: number, propertyFeatures: PropertyFeatures){
        return await getRepository(PropertyFeatures).update(id, propertyFeatures)
    }
}