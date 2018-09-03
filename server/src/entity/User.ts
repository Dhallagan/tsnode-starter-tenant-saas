import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, JoinColumn, ManyToOne} from "typeorm"
import { RoleAliasArn, RoleAliasDescription } from "../../node_modules/aws-sdk/clients/iot";
import { Tenant } from './Tenant';

@Entity("user")
export class User {

    @PrimaryGeneratedColumn()
    Id: number;

    @Column({nullable: true})
    FirstName!: string;

    @Column({nullable: true})
    LastName!: string;

    @Column()
    Email: string;

    @Column({default: false})
    EmailVerified: boolean;

    @Column()
    PasswordHash: string;

    @Column({nullable: true})
    PhoneNumber: string;

    @Column({default: false, nullable: true})
    PhoneNumberVerified: boolean;

    @Column({default: false})
    TwoFactorEnabled: boolean;

    @Column({default: null, nullable: true})
    PasswordResetToken: string;

    @Column({default: null, nullable: true})
    PasswordResetExpires: Date;

    @Column({default: null, nullable: true})
    EmailVerifyToken: string;

    @Column({default: true, nullable: false})
    Active: Boolean;

    @Column({default: null, nullable: true})
    Avatar: String;

    @Column({default: 'User', nullable: false})
    Role: string;

    @CreateDateColumn()
    DateCreated: Date;

    @ManyToOne( type => Tenant, tenant => tenant.Users)
    Tenant: Tenant;

}