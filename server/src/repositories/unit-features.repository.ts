import { EntityRepository, getRepository } from "typeorm";
import { UnitFeatures } from "../entity";

@EntityRepository(UnitFeatures)
export class UnitFeaturesRepository {


    public async create(unitFeatures: Object){
        return await getRepository(UnitFeatures).save(unitFeatures);
    }


    public async findOne(params: Object){
        return await getRepository(UnitFeatures).findOne(params);
    }


    public async find(params: Object){
        return await getRepository(UnitFeatures).find(params);
    }


    public async save(unitFeatures: UnitFeatures){
        return await getRepository(UnitFeatures).save(unitFeatures)
    }


    public async delete(id: number){
        return await getRepository(UnitFeatures).delete(id)
    }

    public async update(id: number, unitFeatures: UnitFeatures){
        return await getRepository(UnitFeatures).update(id, unitFeatures)
    }
}