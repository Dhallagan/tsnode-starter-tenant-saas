import { EntityRepository, getRepository } from "typeorm";
import { ApplicationStatusType } from "../entity";

@EntityRepository(ApplicationStatusType)
export class ApplicationStatusTypeRepository {


    public async create(status: Object){
        return await getRepository(ApplicationStatusType).save(status);
    }


    public async findOne(params: Object){
        return await getRepository(ApplicationStatusType).findOne(params);
    }


    public async findAll() {
        return await getRepository(ApplicationStatusType).find();
    }


    public async find(params: Object){
        return await getRepository(ApplicationStatusType).find(params);
    }

    public async delete(id: number){
        return await getRepository(ApplicationStatusType).delete(id);
    }

    public async update(id: number, status: ApplicationStatusType){
        return await getRepository(ApplicationStatusType).update(id, status);
    }
}