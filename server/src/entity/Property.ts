import {Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn} from "typeorm"
import { Unit } from './Unit';

@Entity()
export class Property {

    @PrimaryGeneratedColumn()
    PropertyId: number;

    @Column()
    Street1: string;

    @Column()
    ApartmentSuite!: string;

    @Column()
    City!: string;

    @Column()
    State!: string;

    @Column()
    Zipcode!: string;

    @OneToMany(type => Unit, unit => unit.Property, {
      eager: true,
      cascade: true
    })
    @JoinColumn({ name: "UnitId" })
    Units: Unit[];
}