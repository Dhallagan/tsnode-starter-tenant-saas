import { Response } from 'express';
import { ListingRepository } from "../repositories";
import { UnitRepository } from '../repositories';

export class ListingService {

    private listingRepository: ListingRepository;
    private unitRepository: UnitRepository;

    constructor() {
        this.listingRepository = new ListingRepository();
        this.unitRepository = new UnitRepository();
    }


    // public async createListing(res: Response, name: string, stripeId: string, interval: string, amount: number) {

    //     const listing = await this.listingRepository.findOne(name);
        
    //     if (listing) {
    //         return res.status(422).json({'errors': [{'msg': 'Listing is already exists.'}]});
    //     }

    //     const newListing = await this.listingRepository.create(name, stripeId, interval, amount);

    //     return res.json(200).json(newListing);
    // }
    public async getListing(res: Response, id: number) {
        const listing = await this.listingRepository.findOne({where: {ListingId: id}, relations: ["Unit"]});
        if (listing) {
            return res.status(200).json(listing);
        }
    }



    public async getListedListings(res: Response, tenantId: number) {
        const listings = await this.listingRepository.find({where: {TenantId: tenantId}, relations: ["Unit"]});
        const listedListings = listings.filter( listing => listing.Unit.IsListed);
        return res.status(200).json(listedListings);
    }


    public async getUnlistedListings(res: Response, tenantId: number) {
        const listings = await this.listingRepository.find({where: {TenantId: tenantId}, relations: ["Unit"]});
        const unlistedListings = listings.filter( listing => !listing.Unit.IsListed);
        return res.status(200).json(unlistedListings);
    }

    public async listListing(res: Response, id: number) {
        const listing = await this.listingRepository.findOne({where: {ListingId: id}, relations: ["Unit"]});

        if (!listing) {
            return res.status(422).json({'errors': [{'msg': 'Listing is not exists.'}]});
        }

        const unit = await this.unitRepository.findOne({UnitId: listing.Unit.UnitId});
        
        if (unit) {
            unit.IsListed = true;
            await this.unitRepository.update(unit.UnitId, unit);

            listing.ListedDate = new Date();
            listing.AvailableDate = new Date();
            listing.Unit = unit;
            await this.listingRepository.update(listing.ListingId, listing);

            console.log(listing)

            return res.status(200).json(listing);
        }
        
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
