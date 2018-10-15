import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { TenantScope } from './TenantScope';
import { Property } from './Property';

@Entity()
export class PropertyFeatures extends TenantScope{

    @PrimaryGeneratedColumn()
    Id: number;

    @Column({nullable: true})
    Name: string;

    @ManyToMany(type => Property, property => property.PropertyFeatures)
    Property: Property[];
}