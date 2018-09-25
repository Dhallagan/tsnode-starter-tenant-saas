import { Response } from 'express';
import { TenantRepository, PlanRepository } from "../repositories";
import { Stripe } from '../core/stripe';
import { Tenant } from '../entity';

export class TenantService {

    private tenantRepository: TenantRepository;
    private planRepository: PlanRepository;
    private stripe: Stripe;


    constructor() {
        this.tenantRepository = new TenantRepository();
        this.planRepository = new PlanRepository();
        this.stripe = new Stripe();
    }

    
    public async createTenant(domain: string) {
        const tenantExists = await this.tenantRepository.getTenantByDomain(domain);

        if (tenantExists) {
            return tenantExists;
        }

        const plan = await this.planRepository.getPlanByName('Trial');

        const tenant = await this.tenantRepository.createTenant(domain, plan);

        return tenant;
    }


    public async getTenants(res: Response) {
        const tenants = await this.tenantRepository.getTenants();
        console.log(tenants);

        return res.status(200).json({Tenants: tenants});
    }


    public async getTenantById(id: number) {
        const tenant = await this.tenantRepository.getTenantById(id);
        console.log(tenant);

        return tenant;
    }


    public async getTenantUsers(id: number) {
        const tenantUsers = await this.tenantRepository.getTenantUsers(id);
        console.log(tenantUsers);

        return tenantUsers;
    }


    public async getTenantPlan(id: number) {
        const tenantPlan = await this.tenantRepository.getTenantPlan(id);
        console.log(tenantPlan);

        return tenantPlan;
    }


    public async updateTenant(res: Response, id: number, domain: string, description: string, name: string, active: boolean, planId: number) {
        var tenant = await this.tenantRepository.getTenantById(id);
        if(!tenant) {
            return  res.status(422).json({'errors': [{'msg': 'Tenant Id is invalid.'}]})
        }

        const plan = await this.planRepository.getPlanById(planId);

        tenant.Domain = domain;
        tenant.Description = description;
        tenant.Name = name;
        tenant.Active = active;

        console.log(tenant);

        if(plan)
            tenant.Plan = plan;
        
        const updatedTenant = await this.tenantRepository.updateTenant(tenant);
        return res.status(200).json(updatedTenant);
    }


    public async saveTenant(res: Response, tenant) {
        const updatedTenant = await this.tenantRepository.updateTenant(tenant);
        return res.status(200).json(updatedTenant);
    }

    public async createCustomer(res: Response, _tenant: Tenant, viewModel: any, email: string) {
        
        const customer = await this.stripe.createCustomer(viewModel.token.id, email);
        _tenant.StripeCustomerId = customer.id;

        const newPlan = await this.planRepository.getPlanById(viewModel.plan);
        if (!newPlan) {
            return res.status(422).json({'msg': 'Plan not found.'});
        }
        const subscription = await this.stripe.planSubscribe(newPlan.StripeId, _tenant.StripeCustomerId);
        _tenant.StripeSubscriptionId = subscription.id;
        _tenant.Plan = newPlan;

        await this.tenantRepository.saveTenant(_tenant);

        return res.status(200).json({'msg': 'Your subscription successfully created.'});
    }

    public async updatePlan(res: Response, _tenant: Tenant, viewModel: any) {
        
        const newPlan = await this.planRepository.getPlanById(viewModel.plan);
        
        if (!newPlan) {
            return res.status(422).json({'msg': 'Plan not found.'});
        }

        await this.stripe.planChange(_tenant.StripeSubscriptionId, newPlan.StripeId);

        _tenant.Plan = newPlan;
        await this.tenantRepository.saveTenant(_tenant);

        return res.status(200).json({'msg': 'Plan updated.'});
    }

}
