import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Tenant } from './Tenant';

@Entity()
export class Company {

    @PrimaryGeneratedColumn()
    Id: number;

    @Column({nullable: true})
    Name: string;

    @Column({nullable: true})
    AccountMail: string;

    @Column({nullable: true})
    CompanyEmail: string;

    @Column({nullable: true})
    LegalName: string;

    @Column({nullable: true})
    Phone: string;

    @Column()
    Street: string;

    @Column()
    ApartmentSuite: string;

    @Column()
    City: string;

    @Column()
    Zipcode: string;

    @Column()
    State: string;

    @Column()
    Country: string;

    @OneToOne(type => Tenant, Tenant => Tenant.Company)
    Tenant: Tenant;

}