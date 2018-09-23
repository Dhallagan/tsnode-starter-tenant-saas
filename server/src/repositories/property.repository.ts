import { EntityRepository, Repository, getRepository } from "typeorm";
import { getConnection } from "typeorm";
import { Property } from "../entity";
import { PropertyType } from "../entity";

@EntityRepository(Property)
export class PropertyRepository {


    public async create(property: Object){
        return await getRepository(Property).save(property);
    }


    public async findOne(params: Object){
        return await getRepository(Property).findOne(params);
    }


    public async find(params: Object){
        return await getRepository(Property).find(params);
    }

    public async getPropertyTypes(tenantId: number) {
        return await getRepository(PropertyType).find()
    }

    public async delete(id: number){
        return await getRepository(Property).delete(id)
    }

    public async update(id: number, property: Property){
        return await getRepository(Property).update(id, property)
    }
}