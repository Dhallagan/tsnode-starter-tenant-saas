import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany} from "typeorm"
import { Tenant } from './Tenant';

@Entity()
export class Applicant {

    @PrimaryGeneratedColumn()
    Id: number;

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
}