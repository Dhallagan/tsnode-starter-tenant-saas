import { EntityRepository, Repository, getRepository } from "typeorm";
import { getConnection } from "typeorm";
import { Unit } from "../entity";

@EntityRepository(Unit)
export class UnitRepository extends Repository<Unit> {


    public async createUnit(unit: Object){
        return await getConnection().manager.save(Unit, unit);
    }


    public async getSingleUnit(params: Object){
        return await getConnection().manager.findOne(Unit, params);
    }


    public async getUnits(){
        return await getConnection().manager.find(Unit);
    }


    // public async saveUnit(unit: Unit) {
    //     return await getConnection().manager.save(Unit, unit);
    // }


    public async updateUnit(id: number, unit: Unit){
        return await getRepository(Unit).update(id, unit);
    }

    public async deleteUnit(id: number){
        return await getRepository(Unit).delete(id);
    }
}