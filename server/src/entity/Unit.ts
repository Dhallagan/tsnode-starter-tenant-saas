import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany} from "typeorm"
import { Property } from './Property';
import { TenantScope } from './TenantScope';
import { UnitImage } from './UnitImage';

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

    @Column({nullable: true})
    SqFt!: number;

    @Column({nullable: true})
    Garage!: Boolean;

    @Column({nullable: true})
    Smoking!: Boolean;

    @Column({nullable: true})
    Description!: string;

    @Column({default: false, nullable: false})
    IsListed: Boolean;

    @OneToMany(type => UnitImage, unitImage => unitImage.Unit)
    UnitImages: UnitImage[];
}