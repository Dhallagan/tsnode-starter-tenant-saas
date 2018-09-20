// import { Response } from 'express';
// import { UnitRepository } from "../repositories";
// import { Unit } from '../entity/Unit';

// export class UnitService {

//     private unitRepository: UnitRepository;
    
//     constructor() {
//         this.unitRepository = new UnitRepository();
//     }


//     public async createUnit(res: Response, street: string, aptsuite: string, city: string, state: string, zipcode: string) {

//         const unitExists = await this.unitRepository.getSingleUnit({Street: street, City: city, State: state});
        
//         if (unitExists) {
//             return res.status(422).json({'errors': [{'msg': 'Unit already exists.'}]});
//         }

//         const newUnit = await this.unitRepository.createUnit({Street: street, ApartmentSuite: aptsuite, City: city, State: state, Zipcode: zipcode});

//         return res.json(200).json(newUnit);
//     }



//     public async getUnits() {
        
//         const units = await this.unitRepository.getUnits();

//         return units;
//     }




//     public async updateUnit(res: Response, id: number, street: string, aptsuite: string, city: string, state: string, zipcode: string) {
        
//         var unit = await this.unitRepository.getSingleUnit({Id: id});
//         if(!unit) {
//             return  res.status(422).json({'errors': [{'msg': 'Unit Id is invalid.'}]})
//         }

//         unit.Street = name;
//         unit.ApartmentSuite = aptsuite;
//         unit.City = city;
//         unit.State = state;
//         unit.Zipcode = zipcode;
        
//         var updatedUnit = await this.unitRepository.updateUnit(id, unit);
//         return res.status(200).json(updatedUnit);
//     }

// }
