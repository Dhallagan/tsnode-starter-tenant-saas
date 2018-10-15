import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { TenantScope } from './TenantScope';
import { Unit } from './Unit';

@Entity()
export class UnitFeatures extends TenantScope{
    
    @PrimaryGeneratedColumn()
    Id: number;

    @Column({nullable: true})
    Name: string;

    @ManyToMany(type => Unit, unit => unit.UnitFeatures)
    Unit: Unit[];
}