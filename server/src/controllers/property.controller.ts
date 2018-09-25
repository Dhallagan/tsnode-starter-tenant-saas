import { Request, Response } from 'express';
import { BaseController } from './base-controller';
import { PropertyService } from '../services';
import { validationResult } from 'express-validator/check';

export class PropertyController extends BaseController {

    private propertyService: PropertyService;

    constructor() {
        super();
        this.propertyService = new PropertyService();
    }


    public async getProperties(req: Request, res: Response){
        const errors = validationResult(req);
        const tenantId = req['tenant'];

        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        return await this.propertyService.getPropertiesByTenant(res, tenantId);
    }


    public async getProperty(req: Request, res: Response) {
        const errors = validationResult(req);
        const id = req.params.id;
        const tenantId = req['tenant'];

        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        return await this.propertyService.getPropertyWithRelations(res, tenantId, id);

    }


    public async createProperty(req: Request, res: Response) {
        const errors = validationResult(req);
        const viewModel = req.body;
        const tenantId = req['tenant'];

        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        console.log(viewModel);
        
        return await this.propertyService.createProperty(res, tenantId, viewModel.type, viewModel.street, viewModel.apartmentSuite, viewModel.city, viewModel.state, viewModel.zipcode);
    }

    public async updateProperty(req: Request, res: Response) {
        const errors = validationResult(req);
        const viewModel = req.body;
        const tenantId = req['tenant'];
        const id = req.params.id;

        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        console.log(viewModel);
        
        return await this.propertyService.updateProperty(res, tenantId, id, viewModel.type, viewModel.street, viewModel.apartmentSuite, viewModel.city, viewModel.state, viewModel.zipcode);
    }


    public async deleteProperty(req: Request, res: Response) {
        const errors = validationResult(req);
        const viewModel = req.body;
        const tenantId = req['tenant'];
        const id = req.params.id;

        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        return await this.propertyService.deleteProperty(res, tenantId, id);
    }

    public async getPropertyTypes(req: Request, res: Response){
        const errors = validationResult(req);
        const tenantId = req['tenant'];

        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        return await this.propertyService.getPropertyTypes(res, tenantId);
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
        
        return await this.propertyService.createPropertyUnit(res, tenantId, propertyId, viewModel.unitNumber, viewModel.bedrooms, viewModel.baths, viewModel.sqFt, viewModel.smoking, viewModel.garage);
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

        return await this.propertyService.deletePropertyUnit(res, tenantId, propertyId, unitId);
    }

    public async getPropertyUnit(req: Request, res: Response) {
        const errors = validationResult(req);
        const tenantId = req['tenant'];
        const propertyId = req.params.id;
        const unitId = req.params.unitId;

        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        
        return await this.propertyService.getPropertyUnit(res, tenantId, propertyId, unitId);
    }

    public async getPropertyUnits(req: Request, res: Response) {
        const errors = validationResult(req);
        const tenantId = req['tenant'];
        const propertyId = req.params.id;

        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        
        return await this.propertyService.getPropertyUnits(res, tenantId, propertyId);
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
        
        return await this.propertyService.updatePropertyUnit(res, tenantId, propertyId, unitId, viewModel.unitNumber, viewModel.bedrooms, viewModel.baths, viewModel.sqFt, viewModel.smoking, viewModel.garage);
    }
}
