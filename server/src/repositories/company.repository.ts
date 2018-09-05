import { Response } from 'express';
import { EntityRepository, Repository, getRepository, MoreThan } from "typeorm";
import { getConnection } from "typeorm";
import { Company, Tenant } from "../entity";


@EntityRepository(Company)
export class CompanyRepository extends Repository<Company> {


    public async createCompany(name: string, accountEmail: string, companyEmail: string, legalName: string, phoneNumber: string, 
                                street: string, apartmentSuite: string, city: string, zipCode: string, state: string, country: string, tenant){
        return await getConnection().manager.save( Company, {
                                                Name: name, AccountMail: accountEmail, CompanyEmail: companyEmail, LegalName: legalName, Phone: phoneNumber,
                                                Street: street, ApartmentSuite: apartmentSuite, City: city, Zipcode: zipCode, State: state, Country: country,
                                                Tenant: tenant});
    }


    public async saveCompany(company: Company){
        return await getConnection().manager.save(Company, company);
    }


    public async getCompanyById(id: number){
        return await getConnection().manager.findOne(Company, {Id: id});
    }


    public async getCompanyByAccountMail(email: string){
        return await getConnection().manager.findOne(Company, {AccountMail: email});
    }


    public async getCompanyByCompanyEmail(email: string){
        return await getConnection().manager.findOne(Company, {CompanyEmail: email});
    }


    public async getCompanies(){
        return await getConnection().manager.find(Company);
    }


    public async updateCompany(id: number, company: Company){
        return await getRepository(Company).update(id, company);
    }
}