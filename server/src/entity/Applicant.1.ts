import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany} from "typeorm"
import { Tenant } from './Tenant';

@Entity()
export class Applicant {

    @PrimaryGeneratedColumn()
    Id: number;

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

}