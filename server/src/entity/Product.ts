import {Entity, PrimaryGeneratedColumn, Column} from "typeorm"

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    Id!: number;

    @Column({nullable: true})
    StripeId: string;

}