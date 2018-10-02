import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm"
import { Property } from './Property';
import { Unit } from './Unit';
import { TenantScope } from './TenantScope';

@Entity()
export class Listing extends TenantScope {

    @PrimaryGeneratedColumn()
    ListingId: number;

    @ManyToOne(type => Property, property => property.Units)
    @JoinColumn({ name: "PropertyId" })
    Property: Property;

    @ManyToOne(type => Unit, unit => unit.Property)
    @JoinColumn({ name: "UnitId" })
    Unit: Unit;

    @Column({nullable: true})
    ListedRent: number;

    @Column({nullable: true})
    SecurityDeposity: number;

    @Column({nullable: true})
    Deposit!: number;

    @Column({nullable: true})
    Terms!: number;

    @Column({nullable: true})
    Section8!: boolean;

    @Column({nullable: true})
    AvailableDate!: Date;

    @Column({nullable: true})
    ListedDate!: Date;
}