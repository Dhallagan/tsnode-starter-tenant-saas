import { EntityRepository, getRepository } from "typeorm";
import { UnitImage } from "../entity";

@EntityRepository(UnitImage)
export class UnitImageRepository {


    public async create(unitImage: object){
        return await getRepository(UnitImage).save(unitImage);
    }


    public async findOne(params: Object){
        return await getRepository(UnitImage).findOne(params);
    }


    public async find(params: Object){
        return await getRepository(UnitImage).find(params);
    }


    public async save(unitImage: UnitImage){
        return await getRepository(UnitImage).save(unitImage)
    }


    public async delete(id: number){
        return await getRepository(UnitImage).delete(id)
    }

    public async update(id: number, unitImage: UnitImage){
        return await getRepository(UnitImage).update(id, unitImage)
    }
}