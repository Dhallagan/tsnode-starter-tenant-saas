import { Response } from 'express';
import { ApplicantRepository, ListingRepository } from '../repositories';

export class ApplicantService {

    private applicantRepository: ApplicantRepository;
    private listingRepository: ListingRepository;


    constructor() {
        this.applicantRepository = new ApplicantRepository();
        this.listingRepository = new ListingRepository();
    }

    public async getApplicant(res: Response, id: number) {

        const applicant = await this.applicantRepository.findOne(id);
        if (!applicant) {
            return res.status(422).json({'errors': [{'msg': 'Applicant not exists.'}]});
        }

        return res.status(200).json(applicant);
    }


    public async getApplicants(res: Response) {

        const applicants = await this.applicantRepository.findAll();
        if (!applicants.length) {
            return res.status(422).json({'errors': [{'msg': 'No applicants.'}]});
        }

        return res.status(200).json(applicants);
    }


    public async createApplicant(res: Response, ViewModel: any, listingId: number) {

        const currentListing = await this.listingRepository.findOne({ListingId: listingId});

        if (currentListing) {
            ViewModel.TenantId = currentListing.TenantId;
        }

        const applicant = await this.applicantRepository.create({...ViewModel});
        return res.status(200).json(applicant);
    }
    

    public async updateApplicant(res: Response, id: number, ViewModel: any) {
        
        const applicant = await this.applicantRepository.findOne(id);
        if (!applicant) {
            return res.status(422).json({'errors': [{'msg': 'Applicant not exists.'}]});
        }

        Object.assign(applicant, ViewModel);
        await this.applicantRepository.update(id, applicant);
        return res.status(200).json({'msg': 'Applicant successfully updated.'});
    }


    public async deleteApplicant(res: Response, id: number) {
        const applicant = await this.applicantRepository.findOne(id);

        if (!applicant) {
            return res.status(422).json({'errors': [{'msg': 'Applicant does not exist.'}]});
        }

        await this.applicantRepository.delete(id);

        return res.status(200).json({'msg': 'Successfully removed the applicant.'});
    }

}
