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

    public async getListing(req: Request, res: Response) {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        const id = req.params.id;

        return await this.listingService.getListing(res, id);
    }

    public async getListingWithRelations(req: Request, res: Response) {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        const id = req.params.id;

        return await this.listingService.getListingWithRelations(res, id);
    }

    public async getListingForClient(req:Request, res:Response){
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        const id = req.params.id;

        return await this.listingService.getListingForClient(res, id);

    }

    public async getAllListings(req: Request, res: Response) {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        let domain;
        if (req.body && req.body.domain) {
            domain = req.body.domain;
        }

        return await this.listingService.getAllListings(res, domain);
    }

    public async getListedListings(req: Request, res: Response) {
        const errors = validationResult(req);
        const tenantId = req['tenant'];

        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        return await this.listingService.getListedListings(res, tenantId);
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
