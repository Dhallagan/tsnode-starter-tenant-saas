import { Request, Response } from 'express';
import { BaseController } from './base-controller';
import { PropertyService } from '../services';

export class PropertyController extends BaseController {

    private propertyService: PropertyService;

    constructor() {
        super();
        this.propertyService = new PropertyService();
    }


    public async getProperties(req: Request, res: Response){
        const properties = await this.propertyService.getProperties();
        
        if (properties)
            return res.status(200).json({Properties: properties});
    }


    public async updateProperty(req: Request, res: Response) {
        //const errors = [];
        const viewModel = req.body;

        console.log(viewModel.Street, viewModel.ApartmentSuite, viewModel.City, viewModel.State, viewModel.Zipcode);
        //Will Add later    
        //if (!errors.isEmpty()) {
        //    return res.status(422).json({ errors: errors.array() });
        //}

        return await this.propertyService.createProperty(res, viewModel.Street, viewModel.ApartmentSuite, viewModel.City, viewModel.State, viewModel.Zipcode);
    }

}
