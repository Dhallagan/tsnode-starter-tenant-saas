import {getRepository} from "typeorm";
import {User, Plan} from "../entity";

export class Seeds {

  public static async seedUsers() {

    const userRepository = getRepository(User);
   
    var user = { Username: "test", Email: "test@test.com", EmailConfirmed: false, PhoneNumber: "5555555555", PhoneNumberConfirmed: false, TwoFactorEnabled: false }
    await userRepository.save(user);
    
  }

  public static async seedPlans() {
      
    const planRepository = getRepository(Plan);

    const plans = [
        {
          Name: "Trial"
        },
        {
          Name: "Basic"
        },
        {
          Name: "Standard"
        },
        {
          Name: "Premium"
        }
    ]

    for (const plan of plans) {
      const existPlan = await planRepository.findOne({Name: plan.Name});
      if (existPlan)
        continue;
      await planRepository.save(plan);
    }
  }
}
