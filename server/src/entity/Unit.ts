import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm"
import { Property } from './Property';
import { TenantScope } from './TenantScope';

@Entity()
export class Unit extends TenantScope {

    @PrimaryGeneratedColumn()
    UnitId: number;

    @ManyToOne( type => Property, property => property.Units, {
        eager: true,
        cascade: true
    })
    @JoinColumn({ name: 'PropertyId'})
    Property: Property;

    @Column()
    UnitNumber: string;

    @Column()
    Bedrooms!: number;

    @Column()
    Baths!: number;

    @Column()
    SqFt!: number;

    @Column()
    Garage!: Boolean;

    @Column()
    Smoking!: Boolean;

    @Column()
    Description!: string;
}