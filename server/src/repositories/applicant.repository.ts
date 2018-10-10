import { EntityRepository, getRepository } from "typeorm";
import { Applicant } from "../entity";

@EntityRepository(Applicant)
export class ApplicantRepository {


    public async create(applicant: Object){
        return await getRepository(Applicant).save(applicant);
    }


    public async findOne(params: Object){
        return await getRepository(Applicant).findOne(params);
    }


    public async findAll() {
        return await getRepository(Applicant).find();
    }


    public async find(params: Object){
        return await getRepository(Applicant).find(params);
    }

    public async delete(id: number){
        return await getRepository(Applicant).delete(id);
    }

    public async update(id: number, applicant: Applicant){
        return await getRepository(Applicant).update(id, applicant);
    }
}