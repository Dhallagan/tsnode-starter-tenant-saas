import { EntityRepository, Repository, getRepository } from "typeorm";
import { getConnection } from "typeorm";
import { Product } from "../entity";

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {


    public async createProduct(stripeId: string){
        return await getConnection().manager.save(Product, {StripeId: stripeId});
    }



    public async getProducts(){
        return await getConnection().manager.find(Product);
    }

}