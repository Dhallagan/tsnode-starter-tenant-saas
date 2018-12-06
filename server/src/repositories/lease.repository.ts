import { EntityRepository, getRepository } from "typeorm";
import { Lease } from "../entity";

@EntityRepository(Lease)
export class LeaseRepository {


    public async create(lease: Object){
        return await getRepository(Lease).save(lease);
    }


    public async findOne(params: Object){
        return await getRepository(Lease).findOne(params);
    }


    public async find(params: Object){
        return await getRepository(Lease).find(params);
    }

    public async delete(id: number){
        return await getRepository(Lease).delete(id)
    }

    public async update(id: number, lease: Lease){
        return await getRepository(Lease).update(id, lease)
    }

    public async save(lease: Lease) {
        return await getRepository(Lease).save(lease)
    }

}