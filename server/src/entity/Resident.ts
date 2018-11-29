import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany} from "typeorm"
import { TenantScope } from './TenantScope';

@Entity()
export class Resident extends TenantScope {

    @PrimaryGeneratedColumn()
    Id: number;

    @Column({nullable: true})
    FirstName: string;

    @Column({nullable: true})
    LastName: string;

    @Column({nullable: true})
    Birthdate: Date;

    @Column({nullable: true})
    Phone: string;

    @Column({nullable: true})
    Email: string;

    @Column({nullable: true})
    Street: string;

    @Column({nullable: true})
    ApartmentSuite: string;

    @Column({nullable: true})
    City: string;

    @Column({nullable: true})
    State: string;

    @Column({nullable: true})
    Zip: string;
    
    @Column({nullable: true})
    Married: boolean;

    @Column({nullable: true})
    Comments: string;

    // Emergency contact
    @Column({nullable: true})
    EmergencyContactFirstName: string;

    @Column({nullable: true})
    EmergencyContactLastName: string;

    @Column({nullable: true})
    EmergencyContactRelationship: string;

    @Column({nullable: true})
    EmergencyContactPhone: string;

    @CreateDateColumn()
    CreatedAt: Date;

    @UpdateDateColumn()
    UpdatedAt: Date;
}