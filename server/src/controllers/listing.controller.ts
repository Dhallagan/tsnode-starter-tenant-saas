import { Request, Response } from 'express';
import { BaseController } from './base-controller';
import { ListingService } from '../services';
import { validationResult } from 'express-validator/check';

export class ListingController extends BaseController {

    private listingService: ListingService;

    constructor() {
        super();
        this.listingService = new ListingService();
    }

    // public async getlisting(req: Request, res: Response) {

    // }

    public async getListedListings(req: Request, res: Response) {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        return await this.listingService.getListedListings(res, req['tenant']);
    }



    public async getUnlistedListings(req: Request, res: Response) {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        return await this.listingService.getUnlistedListings(res, req['tenant']);
    }



    public async listListing(req: Request, res: Response) {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        const id = req.params.id;

        return await this.listingService.listListing(res, id);
    }
}
