import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, OneToOne, ManyToOne, JoinColumn} from "typeorm"
import { User } from './User';
import { Company } from './Company';
import { Plan } from './Plan';

@Entity("tenant")
export class Tenant {

	@PrimaryGeneratedColumn()
	Id: number;

	@Column({nullable: false})
	Domain: string;

	@Column({nullable: true})
	Name: string;

	@Column({nullable: true})
	Description: string;

	@Column({default: true, nullable: false})
	Active: Boolean;

	@CreateDateColumn()
	CreatedAt: Date;

	@UpdateDateColumn()
	UpdatedAt: Date;

	@OneToMany(type => User, user => user.Tenant)
	Users: User[];

	@OneToOne(type => Company, Company => Company.Tenant, {
		eager: true,
		cascade: true
	})

	@JoinColumn()
	Company: Company;

	@ManyToOne( type => Plan, Plan => Plan.Tenants, {
		cascade: true,
		eager: true
	})

	@JoinColumn()
	Plan: Plan;

}