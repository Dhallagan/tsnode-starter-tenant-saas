import {getRepository} from "typeorm";
import {Stripe} from './stripe';
import {User, Plan, Product, PropertyType, PropertyFeatures, UnitFeatures} from "../entity";

export class Seeds {

  public static async seedUsers() {

    const userRepository = getRepository(User);
    
    var user = { Username: "superadmin", Email: "superadmin@tsnodestarter.com", EmailConfirmed: false, PhoneNumber: "5555555555", PhoneNumberConfirmed: false, TwoFactorEnabled: false }
    await userRepository.save(user);
    
  }

  public static async seedPropertyTypes() {
    const propertyTypeRepository = getRepository(PropertyType);

    const propertyTypes = [
      { Type: "Condo/Townhome" },
      { Type: "Multi-Family" },
      { Type: "Single-Fmaily" },
      { Type: "Industrial" },
      { Type: "Office" },
      { Type: "Shopping Center" },
      { Type: "Retail" },
      { Type: "Storage" },
      { Type: "Parking" }
    ]

    const existPropertyTypes = await propertyTypeRepository.find();

    if (existPropertyTypes.length)
      return;

    for (const type of propertyTypes) {
      await propertyTypeRepository.save(type);
    }
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
          Interval: "",
          Pricing: []
        },
        {
          Name: "Basic",
          Amount: 5,
          Interval: "Every 1 month",
          Pricing: ['1 users included', '2 GB of storage', 'Email support', 'Help center access']
        },
        {
          Name: "Standard",
          Amount: 15,
          Interval: "Every 1 month",
          Pricing: ['5 users included', '15 GB of storage', 'Priority email support', 'Help center access']
        },
        {
          Name: "Premium",
          Amount: 29,
          Interval: "Every 1 month",
          Pricing: ['30 users included', '30 GB of storage', 'Phone and email support', 'Help center access']
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

  public static async seedPropertyFeatures() {

    const propertyFeaturesRepository = getRepository(PropertyFeatures);
   
    const propertyFeatures = [
      { Name: "Balcony", TenantId: 1, Property: [] },
      { Name: "Patio", TenantId: 1, Property: [] },
      { Name: "Pool", TenantId: 1, Property: [] },
      { Name: "Weight Room", TenantId: 1, Property: [] }
    ]

    const existPropertyFeatures = await propertyFeaturesRepository.find();
    if (existPropertyFeatures.length)
      return;

    for (const type of propertyFeatures) {
      await propertyFeaturesRepository.save(type);
    }    
  }

  public static async seedUnitFeatures() {

    const unitFeaturesRepository = getRepository(UnitFeatures);
   
    const unitFeatures = [
      { Name: "Balcony", TenantId: 1, Unit: [] },
      { Name: "Deck", TenantId: 1, Unit: [] },
      { Name: "Garage", TenantId: 1, Unit: [] },
      { Name: "Wheel Access", TenantId: 1, Unit: [] }
    ]
    const existUnitFeatures = await unitFeaturesRepository.find();
    if (existUnitFeatures.length)
      return;

    for (const type of unitFeatures) {
      await unitFeaturesRepository.save(type);
    }    
  }
}
