import { EntityRepository, getRepository } from "typeorm";
import { PropertyImage } from "../entity";

@EntityRepository(PropertyImage)
export class PropertyImageRepository {


    public async create(propertyImage: object){
        return await getRepository(PropertyImage).save(propertyImage);
    }


    public async findOne(params: Object){
        return await getRepository(PropertyImage).findOne(params);
    }


    public async find(params: Object){
        return await getRepository(PropertyImage).find(params);
    }


    public async save(propertyImage: PropertyImage){
        return await getRepository(PropertyImage).save(propertyImage)
    }


    public async delete(id: number){
        return await getRepository(PropertyImage).delete(id)
    }

    public async update(id: number, propertyImage: PropertyImage){
        return await getRepository(PropertyImage).update(id, propertyImage)
    }
}