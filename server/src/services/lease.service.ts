import {Response} from 'express';
import {LeaseRepository, UnitRepository, PropertyRepository, ResidentRepository, TermTypeRepository} from '../repositories';
import {Lease} from '../entity';

export class LeaseService {

  private leaseRepository: LeaseRepository;
  private unitRepository: UnitRepository;
  private residentRepository: ResidentRepository;
  private termTypeRepository: TermTypeRepository;
  private propertyRepository: PropertyRepository;
  
  constructor() {
    this.leaseRepository = new LeaseRepository();
    this.unitRepository = new UnitRepository();
    this.residentRepository = new ResidentRepository();
    this.termTypeRepository = new TermTypeRepository();
    this.propertyRepository = new PropertyRepository()
  }

  public async create(res: Response, unitId: number, propertyId: number, startDate: Date, endDate: Date, monthlyRent: number, securityDeposit: number, termType: number, firstName: string, lastName: string, phone: string, email: string) {

    const unit = await this.unitRepository.findOne(unitId);
    console.log(unit);
    if (!unit) {
      return res.status(422).json({'errors': [{'msg': 'Unit is not exists.'}]});
    }
    let lease: any = await this.leaseRepository.findOne({UnitId: unit.UnitId});

    if (!lease) {
      const property = await this.propertyRepository.findOne(propertyId);
      const terms = await this.termTypeRepository.findOne(termType);
      lease = await this.leaseRepository.create({StartDate: startDate, EndDate: endDate, MonthlyRent: monthlyRent, SecurityDeposit: securityDeposit, Terms: terms, Unit: unit, Property: property});
    }

    await this.residentRepository.create({FirstName: firstName, LastName: lastName, Phone: phone, Email: email, Lease: lease});
    return res.status(200).json(lease);

  }

  public async get(res: Response, id: number) {
    const lease = await this.leaseRepository.findOne(id);
    if (!lease) {
      return res.status(422).json({'errors': [{'msg': 'Lease is not exists.'}]});
    }

    return res.status(200).json(lease);
  }

  public async delete(res: Response, id: number) {
    const lease = await this.leaseRepository.findOne(id);
    if (!lease) {
      return res.status(422).json({'errors': [{'msg': 'Lease is not exists.'}]});
    }

    await this.leaseRepository.delete(id);
    return res.status(200).json({'msg': 'Lease successfully deleted.'})
  }
}
