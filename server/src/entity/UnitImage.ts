import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm"
import {Unit} from './Unit';

@Entity()
export class UnitImage {

    @PrimaryGeneratedColumn()
    public Id: number;

    @Column({nullable: true})
    public Url: string;
    
    @Column()
    public Key:string

    @ManyToOne(type => Unit, unit => unit.UnitImages, {onDelete: 'CASCADE'})
    public Unit: Unit;
}
