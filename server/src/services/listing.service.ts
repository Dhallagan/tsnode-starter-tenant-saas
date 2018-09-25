import { Response } from 'express';
import { ListingRepository } from "../repositories";


export class ListingService {

    private listingRepository: ListingRepository;
    
    constructor() {
        this.listingRepository = new ListingRepository();
    }


    // public async createListing(res: Response, name: string, stripeId: string, interval: string, amount: number) {

    //     const listing = await this.listingRepository.findOne(name);
        
    //     if (listing) {
    //         return res.status(422).json({'errors': [{'msg': 'Listing is already exists.'}]});
    //     }

    //     const newListing = await this.listingRepository.create(name, stripeId, interval, amount);

    //     return res.json(200).json(newListing);
    // }



    public async getUnlistedListings(res: Response, tenantId: number) {
        const listings = await this.listingRepository.findUnlisted({TenantId: tenantId});

        return listings;
    }




    // public async updateListing(res: Response, id: number, name: string, stripeId: string, interval: string, amount: number) {
        
    //     var listing = await this.listingRepository.findOne(id);
    //     if(!listing) {
    //         return  res.status(422).json({'errors': [{'msg': 'Listing Id is invalid.'}]})
    //     }

    //     listing.MonthlyRent = monthlyRent;
    //     listing.Deposit = deposit;
    //     listing.Terms = terms;
    //     listing.AvailableDate = availableDate;
    //     listing.Section8
    //     listing.ListedDate
        
    //     var updatedListing = await this.listingRepository.update(id, listing);
    //     return res.status(200).json(updatedListing);
    // }

}
