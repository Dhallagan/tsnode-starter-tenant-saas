import { Response } from 'express';
import { PlanRepository } from "../repositories";


export class PlanService {

    private planRepository: PlanRepository;
    
    constructor() {
        this.planRepository = new PlanRepository();
    }


    public async createPlan(res: Response, name: string, stripeId: string, interval: string, amount: number) {

        const plan = await this.planRepository.getPlanByName(name);
        
        if (plan) {
            return res.status(422).json({'errors': [{'msg': 'Plan is already exists.'}]});
        }

        const newPlan = await this.planRepository.createPlan(name, stripeId, interval, amount);

        return res.json(200).json(newPlan);
    }



    public async getPlans() {
        
        const plans = await this.planRepository.getPlans();

        return plans;
    }




    public async updatePlan(res: Response, id: number, name: string, stripeId: string, interval: string, amount: number) {
        
        var plan = await this.planRepository.getPlanById(id);
        if(!plan) {
            return  res.status(422).json({'errors': [{'msg': 'Plan Id is invalid.'}]})
        }

        plan.Name = name;
        plan.StripeId = stripeId;
        plan.Interval = interval;
        plan.Amount = amount;
        
        var updatedPlan = await this.planRepository.updatePlan(id, plan);
        return res.status(200).json(updatedPlan);
    }

}
