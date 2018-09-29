import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm"
import {Unit} from './Unit';

@Entity()
export class UnitImage {

    @PrimaryGeneratedColumn()
    public Id: number;

    @Column({nullable: true})
    public Url: string;

    @ManyToOne(type => Unit, unit => unit.UnitImages)
    public Unit: Unit;
}
