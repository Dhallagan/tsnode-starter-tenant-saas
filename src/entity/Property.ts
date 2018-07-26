import {Entity, PrimaryGeneratedColumn, Column} from "typeorm"

@Entity()
export class Property {

    @PrimaryGeneratedColumn()
    PropertyId!: number;

    @Column()
    City!: string;

    @Column()
    State!: string;

    @Column()
    Zipcode!: string;

}