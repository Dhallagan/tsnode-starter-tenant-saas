import {Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn} from "typeorm"
import { Unit } from './Unit';
import { TenantScope } from './TenantScope';

@Entity()
export class PropertyType extends TenantScope {

    @PrimaryGeneratedColumn()
    Id: number;

    @Column()
    Type: string;
}
