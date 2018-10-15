import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany, ManyToMany, JoinTable } from "typeorm"
import { Property } from './Property';
import { TenantScope } from './TenantScope';
import { UnitImage } from './UnitImage';
import { UnitFeatures } from './UnitFeatures';

@Entity()
export class Unit extends TenantScope {

    @PrimaryGeneratedColumn()
    UnitId: number;

    @ManyToOne( type => Property, property => property.Units, {
        cascade: true,
        eager: true,
        onDelete: 'CASCADE'
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
    MarketRent: number;

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

    @ManyToMany(type => UnitFeatures, unitFeatures => unitFeatures.Unit)
    @JoinTable({name: "unit_unit_features"})
    UnitFeatures: UnitFeatures[];
}
