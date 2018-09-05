import { Response } from 'express';
import { CompanyRepository } from "../repositories/company.repository";
import { Company } from '../entity/Company';
import { Tenant } from '../entity/Tenant';


export class CompanyService {

    private companyRepository: CompanyRepository;

    
    constructor() {
        //super();
        this.companyRepository = new CompanyRepository();
    }



    public async createCompany( res: Response, model: any, tenant: Tenant ) {
        await this.companyRepository.createCompany( model.companyName, model.accountEmail, model.companyEmail, model.legalName, model.phoneNumber,
                                                        model.address1, model.address2, model.city, model.zipcode, model.state, model.country, tenant );

        return res.status(200).json({'msg': 'Your company was saved.'});
    }



    public async saveCompany( res: Response, model: any, company: Company ) {

        company.Name = model.companyName;
        company.AccountMail = model.accountEmail;
        company.CompanyEmail = model.companyEmail;
        company.LegalName= model.legalName;
        company.Phone= model.phoneNumber;
        company.Street= model.address1;
        company.ApartmentSuite= model.address2;
        company.City= model.city;
        company.Zipcode= model.zipcode;
        company.State= model.state;
        company.Country= model.country;
        company.Tenant= model.tenant;

        await this.companyRepository.saveCompany(company);

        return res.status(200).json({'msg': 'Your company was saved.'});
    }
}
