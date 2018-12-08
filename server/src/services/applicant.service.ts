import { Response } from 'express';
import { Applicant } from '../entity';
import { ApplicantRepository, ListingRepository, ApplicationStatusTypeRepository } from '../repositories';

export class ApplicantService {

    private applicantRepository: ApplicantRepository;
    private listingRepository: ListingRepository;
    private applicationStatusRepository: ApplicationStatusTypeRepository;

    constructor() {
        this.applicantRepository = new ApplicantRepository();
        this.listingRepository = new ListingRepository();
        this.applicationStatusRepository = new ApplicationStatusTypeRepository();
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

        const currentListing = await this.listingRepository.findOne(listingId);
        const status = await this.applicationStatusRepository.findOne({Name: 'None'});


        if (currentListing) {
            ViewModel.TenantId = currentListing.TenantId;
            await this.applicantRepository.create({...ViewModel, ApplicationStatus: status, Listing: currentListing});
        } else {
            await this.applicantRepository.create({...ViewModel, ApplicationStatus: status});
        }
     
        
        return res.status(200).json({'msg': 'Applicant created.'});
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

    public async updateApplicantStatus(res: Response, id: number, status: string) {

        const applicant = await this.applicantRepository.findOne(id);
        if (!applicant) {
            return res.status(422).json({'errors': [{'msg': 'Applicant does not exist.'}]});
        }

        const _status = await this.applicationStatusRepository.findOne({Name: status})
        if (!_status) {
            return res.status(422).json({'errors': [{'msg': 'Status does not exist.'}]});
        }
        
        applicant.ApplicationStatus = _status;
        await this.applicantRepository.update(id, applicant);
        
        return res.status(200).json({'msg': 'Successfully updated the status.'});
    }

}
