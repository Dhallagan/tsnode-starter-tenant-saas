import { EntityRepository, Repository, getRepository } from "typeorm";
import { getConnection } from "typeorm";
import { Property } from "../entity";

@EntityRepository(Property)
export class PropertyRepository extends Repository<Property> {


    public async createOne(property: Object){
        return await getConnection().manager.save(Property, property);
    }


    public async getOne(params: Object){
        return await getConnection().manager.findOne(Property, params);
    }

    public async getPropertyWithRelations(id: number) {
        return await getRepository(Property).findOne({ where: {Id: id}, relations: ["Units"] });
    }


    public async findAll(){
        return await getConnection().manager.find(Property);
    }


    public async getPropertiesByTenant(tenantId: number) {
        return await getConnection().manager.find(Property, {TenantId: tenantId})
    }

}