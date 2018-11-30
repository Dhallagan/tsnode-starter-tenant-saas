import { Response } from 'express';
import { ApplicationStatusTypeRepository } from "../repositories";


export class ApplicationStatusTypeService {

    private applicationStatusTypeRepository: ApplicationStatusTypeRepository;
    
    constructor() {
        this.applicationStatusTypeRepository = new ApplicationStatusTypeRepository();
    }

    public async getApplicationStatusTypes(res: Response) {
        
        const types = await this.applicationStatusTypeRepository.find({});
        return res.status(200).json(types);
    }

}
