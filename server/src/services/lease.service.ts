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

  public async create(res: Response, unitId: number, propertyId: number, startDate: Date, endDate: Date, monthlyRent: number, securityDeposit: number, termType: number, resident: any) {

    const unit = await this.unitRepository.findOne(unitId);

    if (!unit) {
      return res.status(422).json({'errors': [{'msg': 'Unit is not exists.'}]});
    }
    
    let lease: any = await this.leaseRepository.findOne({Unit: unit});

    if (!lease) {
      const property = await this.propertyRepository.findOne(propertyId);
      const terms = await this.termTypeRepository.findOne(termType);
      lease = await this.leaseRepository.create({TenantId: unit.TenantId, StartDate: startDate, EndDate: endDate, MonthlyRent: monthlyRent, SecurityDeposit: securityDeposit, Terms: terms, Unit: unit, Property: property});
    }

    console.log(unit, lease);

    const _resident = await this.residentRepository.create({...resident, Lease: lease});

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
