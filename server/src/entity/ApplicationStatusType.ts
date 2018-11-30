import {Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn} from "typeorm"
import {Applicant} from './Applicant';

@Entity()
export class ApplicationStatusType {

    @PrimaryGeneratedColumn()
    Id: number;

    @Column()
    Name: string;

    @OneToMany(type => Applicant, applicant => applicant.ApplicationStatus, {
		eager: true,
		cascade: true
	})
    Applicants: Applicant[];
}

//Seed with Types of "None","Approved", "Pending", "Rejected"