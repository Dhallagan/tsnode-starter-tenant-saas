import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne, OneToOne, JoinColumn} from "typeorm"
import { TenantScope
    // , Property, Unit, Resident 
} from './TenantScope';

import { Property } from './Property';
import { Unit } from './Unit';
import { Resident } from './Resident';
import { TermType } from './TermType';

@Entity()
export class Lease extends TenantScope {

    @PrimaryGeneratedColumn()
    Id: number;

    //JOIN RESIDENT
    //One Lease can have multiple Residents?
    @OneToMany(type => Resident, recident => recident.Lease)
    Residents: Resident[];

    // JOIN BUILDING
    // One lease can have one building per lease
    @ManyToOne(type => Property, property => property.Lease, {
        cascade: true,
        eager: true,
        onDelete: 'CASCADE'
    })
    @JoinColumn({name: 'PropertyId'})
    Property: Property;

    //JOIN UNIT
    //One lease can have one unit in that building per lease
    @OneToOne(type => Unit, unit => unit.Lease, {
        cascade: true,
        eager: true,
        onDelete: 'CASCADE'
    })
    @JoinColumn({name: 'UnitId'})
    Unit: Unit;

    @Column()
    StartDate: Date;

    @Column()
    EndDate: Date;

    @Column({nullable: true})
    MonthlyRent: number;

    @Column({nullable: true})
    SecurityDeposit: number;

    //Add TermType reference: Fixed, Fixed w/ Rollover, Month To Month
    @ManyToOne(type => TermType, termType => termType.Lease, {
        onDelete: 'CASCADE',
        cascade: true,
        eager: true
    })
    Terms: number;

    @CreateDateColumn()
    CreatedAt: Date;

    @UpdateDateColumn()
    UpdatedAt: Date;
}

// `Id` int(11) NOT NULL AUTO_INCREMENT,
// `ResidentId` int(11) NOT NULL,
// `PropertyId` int(11) NOT NULL,
// `UnitId` int(11) NOT NULL,
// `StartDate` date NOT NULL,
// `EndDate` date DEFAULT NULL,
// `SignDate` date DEFAULT NULL,
// `Terms` int(11) NOT NULL,
// `MonthlyRent` decimal(10,0) NOT NULL,
// `SecurityDeposit` decimal(10,0) DEFAULT NULL,
// `PetDeposit` varchar(45) DEFAULT NULL,
// PRIMARY KEY (`LeaseId`),
// KEY `ResidentId_idx` (`ResidentId`),
// KEY `PropertyId_idx` (`PropertyId`),
// KEY `UnitId_idx` (`UnitId`),
// CONSTRAINT `PropertyId` FOREIGN KEY (`PropertyId`) REFERENCES `property` (`PropertyId`) ON DELETE NO ACTION ON UPDATE NO ACTION,
// CONSTRAINT `ResidentId` FOREIGN KEY (`ResidentId`) REFERENCES `resident` (`ResidentId`) ON DELETE NO ACTION ON UPDATE NO ACTION