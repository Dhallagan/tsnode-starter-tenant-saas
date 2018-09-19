import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm"

@Entity()
export class Listing {

    @PrimaryGeneratedColumn()
    ListingId: number;

    // @ManyToOne( type => Property, property => property.Units)
    // Property: Property;

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