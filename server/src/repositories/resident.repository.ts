import { EntityRepository, getRepository } from "typeorm";
import { Resident } from "../entity";

@EntityRepository(Resident)
export class ResidentRepository {


    public async create(resident: Object){
        return await getRepository(Resident).save(resident);
    }


    public async findOne(params: Object){
        return await getRepository(Resident).findOne(params);
    }


    public async find(params: Object){
        return await getRepository(Resident).find(params);
    }

    public async delete(id: number){
        return await getRepository(Resident).delete(id)
    }

    public async update(id: number, resident: Resident){
        return await getRepository(Resident).update(id, resident)
    }

    public async save(resident: Resident) {
        return await getRepository(Resident).save(resident)
    }

}