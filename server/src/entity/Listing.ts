import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm"
import { Property } from './Property';
import { Unit } from './Unit';
import { TenantScope } from './TenantScope';

@Entity()
export class Listing extends TenantScope {

    @PrimaryGeneratedColumn()
    ListingId: number;

    // @ManyToOne( type => Property, property => property.Units)
    // Property: Property;
    @ManyToOne(type => Property, property => property.Units)
    @JoinColumn({ name: "PropertyId" })
    Property: Property;

    @ManyToOne(type => Unit, unit => unit.Property)
    @JoinColumn({ name: "UnitId" })
    Unit: Unit;

    @Column()
    MonthlyRent: number;

    @Column()
    Deposit!: number;

    @Column()
    AvailableDate!: Date;

    @Column()
    ListedDate!: Date;

    @Column()
    Terms!: number;

    @Column()
    Section8!: boolean;
}