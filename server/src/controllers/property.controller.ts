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

        console.log(viewModel.street, viewModel.apartmentSuite, viewModel.city, viewModel.state, viewModel.zipcode);
        
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

        console.log(viewModel.street, viewModel.apartmentSuite, viewModel.city, viewModel.state, viewModel.zipcode);
        
        return await this.propertyService.createProperty(res, tenantId, viewModel.type, viewModel.street, viewModel.apartmentSuite, viewModel.city, viewModel.state, viewModel.zipcode);
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

}
