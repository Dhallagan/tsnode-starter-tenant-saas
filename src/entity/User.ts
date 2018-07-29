import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, Timestamp} from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    Id: number;

    @Column()
    Username: string;

    @Column()
    Email: string;

    @Column({default: false})
    EmailVerified: boolean;

    @Column()
    PasswordHash: string;

    @Column()
    PhoneNumber: string;

    @Column({default: false})
    PhoneNumberVerified: boolean;

    @Column({default: false})
    TwoFactorEnabled: boolean;

    @Column({default: null, nullable: true})
    PasswordResetToken: string;

    @Column({default: null, nullable: true})
    PasswordResetExpires: Date;

    @CreateDateColumn()
    DateCreated: Date;
}