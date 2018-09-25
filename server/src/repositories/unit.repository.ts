import { EntityRepository, Repository, getRepository } from "typeorm";
import { getConnection } from "typeorm";
import { Unit } from "../entity";

@EntityRepository(Unit)
export class UnitRepository {


    public async create(property: Object){
        return await getRepository(Unit).save(property);
    }


    public async findOne(params: Object){
        return await getRepository(Unit).findOne(params);
    }


    public async find(params: Object){
        return await getRepository(Unit).find(params);
    }

    public async delete(id: number){
        return await getRepository(Unit).delete(id)
    }

    public async update(id: number, unit: Unit){
        return await getRepository(Unit).update(id, unit)
    }
}