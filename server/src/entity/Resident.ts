import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn} from "typeorm"
import { TenantScope } from './TenantScope';

import { Lease } from './Lease';

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

    @ManyToOne(type => Lease, lease => lease.Residents, {
        cascade: true,
        eager: true,
        onDelete: 'CASCADE'
    })
    @JoinColumn()
    Lease: Lease;


    @CreateDateColumn()
    CreatedAt: Date;

    @UpdateDateColumn()
    UpdatedAt: Date;
}