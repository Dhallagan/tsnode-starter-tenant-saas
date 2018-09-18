import {getRepository} from "typeorm";
import {Stripe} from './stripe';
import {User, Plan, Product} from "../entity";

export class Seeds {

  public static async seedUsers() {

    const userRepository = getRepository(User);
   
    var user = { Username: "test", Email: "test@test.com", EmailConfirmed: false, PhoneNumber: "5555555555", PhoneNumberConfirmed: false, TwoFactorEnabled: false }
    await userRepository.save(user);
    
  }

  public static async seedProduct() {
    const productRepository = getRepository(Product);

    const products = await productRepository.find();
    if (products.length)
      return null;
    const product = await Stripe.createProduct();
    return await productRepository.save({StripeId: product.id});
  }

  public static async seedPlans() {
      
    const planRepository = getRepository(Plan);

    const plans = [
        {
          Name: "Trial",
          Amount: 0,
          Interval: ""
        },
        {
          Name: "Basic",
          Amount: 10,
          Interval: "Every 1 month"
        },
        {
          Name: "Standard",
          Amount: 20,
          Interval: "Every 3 month"
        },
        {
          Name: "Premium",
          Amount: 30,
          Interval: "Every 6 month"
        }
    ]

    const product = await this.seedProduct();
    const existPlan = await planRepository.find();

    if (!product || existPlan.length)
      return;

    for (const plan of plans) {
      
      if (plan.Name !== 'Trial') {
        const _plan = await Stripe.createPlan(product.StripeId, plan);
        plan['StripeId'] = _plan.id;
      }
      
      await planRepository.save(plan);

    }

  }
}
