import {Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn} from "typeorm"

@Entity()
export class ApplicationStatusType {

    @PrimaryGeneratedColumn()
    Id: number;

    @Column()
    Name: string;
}

//Seed with Types of "None","Approved", "Pending", "Rejected"