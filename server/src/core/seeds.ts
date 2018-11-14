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

  public static async seedPropertyFeatures(TenantId: number) {

    const propertyFeaturesRepository = getRepository(PropertyFeatures);
   
    const propertyFeatures = [
      { Name: "Club House", TenantId, Property: [] },
      { Name: "Doorman", TenantId, Property: [] },
      { Name: "Elevator", TenantId, Property: [] },
      { Name: "Fitness Center", TenantId, Property: [] },
      { Name: "Laundry Room", TenantId, Property: [] },
      { Name: "Parking", TenantId, Property: [] },
      { Name: "Pool", TenantId, Property: [] },
      { Name: "Storage Units", TenantId, Property: [] },
      { Name: "Wheelchair Accesss", TenantId, Property: [] },
      { Name: "Bike Rack", TenantId, Property: [] },
      { Name: "Community Rooftop", TenantId, Property: [] }, 
      { Name: "Offstreet Parking", TenantId, Property: [] }
    ]

    const existPropertyFeatures = await propertyFeaturesRepository.find({TenantId});
    if (existPropertyFeatures.length)
      return;

    for (const type of propertyFeatures) {
      await propertyFeaturesRepository.save(type);
    }    
  }

  public static async seedUnitFeatures(TenantId: number) {

    const unitFeaturesRepository = getRepository(UnitFeatures);
   
    const unitFeatures = [
      { Name: "Air Conditioning", TenantId, Unit: [] },
      { Name: "Balcony, Deck, Patio", TenantId, Unit: [] },
      { Name: "Cable", TenantId, Unit: [] },
      { Name: "High Speed Internet", TenantId, Unit: [] },
      { Name: "Garage", TenantId, Unit: [] },
      { Name: "Cable", TenantId, Unit: [] },
      { Name: "Dishwasher", TenantId, Unit: [] },
      { Name: "Washing Machine", TenantId, Unit: [] },
      { Name: "Dryer", TenantId, Unit: [] },
      { Name: "Fenced Yard", TenantId, Unit: [] },
      { Name: "Fireplace", TenantId, Unit: [] },
      { Name: "Hardwood Floors", TenantId, Unit: [] },
      { Name: "Cable", TenantId, Unit: [] },
    ]
    const existUnitFeatures = await unitFeaturesRepository.find({TenantId});
    if (existUnitFeatures.length)
      return;

    for (const type of unitFeatures) {
      await unitFeaturesRepository.save(type);
    }    
  }
}
