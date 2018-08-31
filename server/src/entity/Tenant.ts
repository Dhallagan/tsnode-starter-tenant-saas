import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, OneToOne, JoinColumn} from "typeorm"
import { User } from './User';
import { Company } from './Company';

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

	@CreateDateColumn()
	CreatedAt: Date;

	@Column({default: true, nullable: false})
	Active: Boolean;

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

}