import {Entity, PrimaryGeneratedColumn, ManyToOne, Column} from 'typeorm';
import {Unit} from './Unit';

@Entity()
export class UnitFeatures {
    
    @PrimaryGeneratedColumn()
    Id: number;

    @Column({nullable: true})
    Balcony: string;

    @Column({nullable: true})
    Deck: string;

    @Column({nullable: true})
    Patio: string;

    @Column({nullable: true})
    Garage: string;

    @Column({nullable: true})
    AirConditioning: string;

    @Column({nullable: true})
    CableReady: string;

    @Column({nullable: true})
    Dishwasher: string;

    @Column({nullable: true})
    Fireplace: string;

    @Column({nullable: true})
    InUnitLaundry: string;

    @Column({nullable: true})
    HardwoodFloors: string;

    @Column({nullable: true})
    WheelChair: string;

    @Column({nullable: true})
    Access: string;

    @ManyToOne(type => Unit, unit => unit.UnitFeatures, {
        cascade: true,
        eager: true,
        onDelete: 'CASCADE'
    })
    Unit: Unit;

}