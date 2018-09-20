import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany} from "typeorm"
import { Tenant } from './Tenant';

@Entity()
export class Plan {

    @PrimaryGeneratedColumn()
    Id: number;

    @Column({nullable: true})
    Name!: string;

    @Column({nullable: true})
    StripeId: string;

    @Column({nullable: true})
    Interval!: string;

    @Column({nullable: true})
    Amount!: number;

    @Column("simple-array")
    Pricing!: string[];

    @OneToMany(type => Tenant, Tenant => Tenant.Plan)
    Tenants: Tenant[];

    @CreateDateColumn()
    CreatedAt: Date;

    @UpdateDateColumn()
    UpdatedAt: Date;
}