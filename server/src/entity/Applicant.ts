import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany} from "typeorm"
import { Tenant } from './Tenant';
import { TenantScope } from './TenantScope';

@Entity()
export class Applicant extends TenantScope {

    @PrimaryGeneratedColumn()
    Id: number;

    @Column({nullable: false})
    ListingApplyTo: number;

    @Column({nullable: true})
    FirstName: string;

    @Column({nullable: true})
    LastName: string;

    @Column({nullable: true})
    Ssn: string;

    @Column({nullable: true})
    Birthdate: Date;

    @Column({nullable: true})
    Email: string;

    @Column({nullable: true})
    Phone: string;

    @Column({nullable: true})
    EmergencyContactFirstName: string;

    @Column({nullable: true})
    EmergencyContactLastName: string;

    @Column({nullable: true})
    EmergencyContactRelationship: string;

    @Column({nullable: true})
    EmergencyContactPhone: string;

    //Residence
    @Column({nullable: true})
    CurrentStreet: string;

    @Column({nullable: true})
    CurrentCity: string;

    @Column({nullable: true})
    CurrentState: string;

    @Column({nullable: true})
    CurrentZip: string;

    @Column({nullable: true})
    CurrentOwnerName: string;

    @Column({nullable: true})
    CurrentOwnerPhoneNumber: string;

    @Column({nullable: true})
    CurrentStartDate: string;

    @Column({nullable: true})
    CurrentEndDate: string;

    @Column({nullable: true})
    CurrentReasonForMoving: string;

    @Column({nullable: true})
    PreviousStreet: string;

    @Column({nullable: true})
    PreviousCity: string;

    @Column({nullable: true})
    PreviousState: string;

    @Column({nullable: true})
    PreviousZip: string;

    @Column({nullable: true})
    PreviousOwnerName: string;

    @Column({nullable: true})
    PreviousOwnerPhoneNumber: string;

    @Column({nullable: true})
    PreviousStartDate: Date;

    @Column({nullable: true})
    PreviousEndDate: Date;

    @Column({nullable: true})
    PreviousReasonForMoving: string;

    //Employment History
    @Column({nullable: true})
    CurrentEmployer: string;

    @Column({nullable: true})
    CurrentOccupation: string;

    @Column({nullable: true})
    CurrentEmploymentStartDate: string;

    @Column({nullable: true})
    CurrentEmploymentEndDate: string;

    @Column({nullable: true})
    CurrentNameSupervisor: string;

    @Column({nullable: true})
    CurrentMonthlySalary: string;

    @Column({nullable: true})
    PreviousEmployer: string;

    @Column({nullable: true})
    PreviousOccupation: string;

    @Column({nullable: true})
    PreviousEmploymentStartDate: string;

    @Column({nullable: true})
    PreviousEmploymentEndDate: string;

    @Column({nullable: true})
    PreviousNameSupervisor: string;

    @Column({nullable: true})
    PreviousMonthlySalary: string;

    @Column({nullable: true})
    DelinquentRent: Boolean;

    @Column({nullable: true})
    Sued: Boolean;

    @Column({nullable: true})
    Smoke: Boolean;

    @Column({nullable: true})
    Pets: Boolean;

    @Column({nullable: true})
    PetsBreed: Boolean;

    @Column({nullable: true})
    PetsWeight: Boolean;

    @Column({nullable: true})
    GeneralExplain: String;

    @Column({nullable: true})
    NegativeComments: String;

    @Column({nullable: true})
    WhyMove: String;

    @Column({nullable: true})
    Comments: String;

    @Column({nullable: true})
    ESignature: String;

    @Column({nullable: true})
    AgreedToTerms: String;

    @CreateDateColumn()
    CreatedAt: Date;

    @UpdateDateColumn()
    UpdatedAt: Date;
}