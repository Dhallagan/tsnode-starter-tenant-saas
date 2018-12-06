import { EntityRepository, getRepository } from "typeorm";
import { TermType } from "../entity";

@EntityRepository(TermType)
export class TermTypeRepository {


    public async create(termType: Object){
        return await getRepository(TermType).save(termType);
    }


    public async findOne(params: Object){
        return await getRepository(TermType).findOne(params);
    }


    public async find(params: Object){
        return await getRepository(TermType).find(params);
    }

    public async delete(id: number){
        return await getRepository(TermType).delete(id)
    }

    public async update(id: number, termType: TermType){
        return await getRepository(TermType).update(id, termType)
    }

    public async save(termType: TermType) {
        return await getRepository(TermType).save(termType)
    }

}