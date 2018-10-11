// import { Response } from 'express';
// import { UserRepository, CompanyRepository } from "../repositories";
// import { Storage } from '../core/storage'
// import { TenantService } from './tenant.service';

// export class UserService {

//     private userRepository: UserRepository;
//     private companyRepository: CompanyRepository;
//     private tenantService: TenantService;
    
//     constructor() {
//         //super();
//         this.userRepository = new UserRepository();
//         this.companyRepository = new CompanyRepository();
//         this.tenantService = new TenantService();
//     }

//     public async upload(req, res: Response) {
//         //// Local storage
//         // const uploader = new Uploader();
//         // var fileName = await uploader.startUpload(req, res)
//         const s3 = new Storage();
//         var fileName = await s3.uploadSingle(req, res);
//         return res.status(200).json({'filename' : fileName})
//     }

// }
