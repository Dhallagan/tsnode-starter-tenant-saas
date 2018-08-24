import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany} from "typeorm"
import { User } from './User';

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

	@UpdateDateColumn()
	UpdatedAt: Date;

	@OneToMany(type => User, user => user.Tenant)
	Users: User[];

}