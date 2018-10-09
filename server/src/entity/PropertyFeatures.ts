import {Entity, Column, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {Property} from './Property';

@Entity()
export class PropertyFeatures {

    @PrimaryGeneratedColumn()
    Id: number;

    @Column({nullable: false})
    Parking: string;

    @Column({nullable: false})
    FitnessCenter: string;

    @Column({nullable: false})
    Pool: string;

    @Column({nullable: false})
    StorageUnits: string;

    @Column({nullable: false})
    WheelChairAccess: string;

    @Column({nullable: false})
    LaundryRoom: string;

    @Column({nullable: false})
    DoorAttendant: string;

    @ManyToOne(type => Property, property => property.PropertyFeatures)
    Property: Property;
}