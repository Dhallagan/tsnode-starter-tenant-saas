import {Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn} from "typeorm"
import { TenantScope } from './TenantScope';

@Entity()
export class TermType extends TenantScope {

    @PrimaryGeneratedColumn()
    Id: number;

    @Column()
    Name: string;
}
//Seed with Types of "Fixed", "Fixed w/ Rollover", "Month to Month"