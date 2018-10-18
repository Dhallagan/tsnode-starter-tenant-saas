import { Request, Response } from 'express';
import { BaseController } from './base-controller';
import { UnitService } from '../services';
import { validationResult } from 'express-validator/check';

export class UnitController extends BaseController {

    private unitService: UnitService;

    constructor() {
        super();
        this.unitService = new UnitService();
    }

    public async createPropertyUnit(req: Request, res: Response) {
      const errors = validationResult(req);
      const viewModel = req.body;
      const tenantId = req['tenant'];
      const propertyId = req.params.id;
      console.log(req.params)
      if (!errors.isEmpty()) {
          return res.status(422).json({ errors: errors.array() });
      }
      
      return await this.unitService.createPropertyUnit(res, tenantId, propertyId, viewModel.unitNumber, viewModel.bedrooms, viewModel.baths, viewModel.sqFt, viewModel.smoking, viewModel.garage, viewModel.marketRent);
  }


  public async deletePropertyUnit(req: Request, res: Response) {
      const errors = validationResult(req);
      const viewModel = req.body;
      const tenantId = req['tenant'];
      const propertyId = req.params.id;
      const unitId = req.params.unitId;

      if (!errors.isEmpty()) {
          return res.status(422).json({ errors: errors.array() });
      }

      return await this.unitService.deletePropertyUnit(res, tenantId, propertyId, unitId);
  }

  public async getPropertyUnit(req: Request, res: Response) {
      const errors = validationResult(req);
      const tenantId = req['tenant'];
      const propertyId = req.params.id;
      const unitId = req.params.unitId;

      if (!errors.isEmpty()) {
          return res.status(422).json({ errors: errors.array() });
      }
      
      return await this.unitService.getPropertyUnit(res, tenantId, propertyId, unitId);
  }

  public async getPropertyUnits(req: Request, res: Response) {
      const errors = validationResult(req);
      const tenantId = req['tenant'];
      const propertyId = req.params.id;

      if (!errors.isEmpty()) {
          return res.status(422).json({ errors: errors.array() });
      }
      
      return await this.unitService.getPropertyUnits(res, tenantId, propertyId);
  }


  public async updatePropertyUnit(req: Request, res: Response) {
      const errors = validationResult(req);
      const viewModel = req.body;
      const tenantId = req['tenant'];
      const propertyId = req.params.id;
      const unitId = req.params.unitId;
      if (!errors.isEmpty()) {
          return res.status(422).json({ errors: errors.array() });
      }
      
      return await this.unitService.updatePropertyUnit(res, tenantId, propertyId, unitId, viewModel.unitNumber, viewModel.bedrooms, viewModel.baths, viewModel.sqFt, viewModel.smoking, viewModel.garage, viewModel.marketRent, viewModel.unitFeatures);
  }
}
