import { EntityRepository, Repository, getRepository } from "typeorm";
import { getConnection } from "typeorm";
import { Listing } from "../entity";

@EntityRepository(Listing)
export class ListingRepository {


    public async create(listing: Object){
        return await getRepository(Listing).save(listing);
    }


    public async findOne(params: Object){
        return await getRepository(Listing).findOne(params);
    }


    public async find(params: Object){
        return await getRepository(Listing).find(params);
    }

    public async delete(id: number){
        return await getRepository(Listing).delete(id)
    }

    public async update(id: number, listing: Listing){
        return await getRepository(Listing).update(id, listing)
    }

    // THIS NEEDS TO DO THIS:
    // BASICALLY GET ALL PROPERTY AND UNIT COMBOS WHERE THERE IS NOT A LISTING RECORD 
    //
    // SELECT *
    // FROM property
    // INNER JOIN unit On property.Id = unit.PropertyId
    // LEFT JOIN listing on listing.PropertyId = property.Id 
    // WHERE listing.PropertyId is null;
    
    public async findUnlisted(params: Object){
        return await getRepository(Listing).find(params);
    }

}