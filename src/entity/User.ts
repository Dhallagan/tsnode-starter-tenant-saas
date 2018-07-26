import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn} from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    Id: number;

    @Column()
    Username: string;

    @Column()
    Email: string;

    @Column()
    EmailConfirmed: boolean;

    @Column()
    PasswordHash: string;

    @Column()
    PasswordSalt: string;

    @Column()
    PhoneNumber: string;

    @Column()
    PhoneNumberConfirmed: boolean;

    @Column()
    TwoFactorEnabled: boolean;

    @Column()
    ForgotPasswordCode: string;

    @CreateDateColumn()
    DateCreated: Date;
}