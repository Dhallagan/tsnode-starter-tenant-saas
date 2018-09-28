import { BaseRoute } from './base-route';
import { ListingController } from '../controllers';
import { Authentication } from '../core/middleware/authentication';

export class ListingRoutes extends BaseRoute {
    listingController: ListingController;

    constructor() {
        super();
        this.listingController = new ListingController();

        this.initRoutes();
    }


    initRoutes() {
        this.router.get('/listings/:id', Authentication.isAuthenticated, (req, res, next) => this.listingController.getListing(req, res).catch(next));
        this.router.get('/listings/listed', Authentication.isAuthenticated, (req, res, next) => this.listingController.getListedListings(req, res).catch(next));
        this.router.get('/listings/unlisted', Authentication.isAuthenticated, (req, res, next) => this.listingController.getUnlistedListings(req, res).catch(next));
        this.router.put('/listings/:id', Authentication.isAuthenticated, (req, res, next) => this.listingController.listListing(req, res).catch(next));
    }
}
