import { EntityRepository, Repository, getRepository } from "typeorm";
import { getConnection } from "typeorm";
import { Property } from "../entity";

@EntityRepository(Property)
export class PropertyRepository  {


    public async create(property: Object){
        return await getConnection().manager.save(Property, property);
    }


    public async getOne(params: Object){
        return await getConnection().manager.findOne(Property, params);
    }


    public async getAll(){
        return await getConnection().manager.find(Property);
    }


    public async save(property: Property) {
        return await getConnection().manager.save(Property, property);
    }


    public async update(id: number, property: Property){
        return await getRepository(Property).update(id, property);
    }


    public async delete(id: number){
        return await getRepository(Property).delete(id);
    }
}