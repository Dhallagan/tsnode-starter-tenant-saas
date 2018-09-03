import { EntityRepository, Repository, getRepository } from "typeorm";
import { getConnection } from "typeorm";
import { Plan } from "../entity";

@EntityRepository(Plan)
export class PlanRepository extends Repository<Plan> {


    public async createPlan(name: string, stripeId: string, interval: string, amount: number){
        return await getConnection().manager.save(Plan, {Name: name, StripeId: stripeId, Interval: interval, Amount: amount});
    }


    public async getPlanById(id: number){
        return await getConnection().manager.findOne(Plan, {Id: id});
    }


    public async getPlanByName(name: string) {
        return await getConnection().manager.findOne(Plan, {Name: name});
    }


    public async getPlans(){
        return await getConnection().manager.find(Plan);
    }


    public async savePlan(plan: Plan) {
        return await getConnection().manager.save(Plan, plan);
    }


    public async updatePlan(id: number, plan: Plan){
        return await getRepository(Plan).update(id, plan);
    }

}