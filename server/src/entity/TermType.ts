import {Entity, PrimaryColumn, Column, OneToMany, JoinColumn} from "typeorm"
import { TenantScope } from './TenantScope';
import { Lease } from './Lease';

@Entity()
export class TermType extends TenantScope {

    @PrimaryColumn()
    Id: number;

    @Column()
    Type: string;

    @OneToMany(type => Lease, lease => lease.Terms)
    Lease: Lease;

}
//Seed with Types of "Fixed", "Fixed w/ Rollover", "Month to Month"