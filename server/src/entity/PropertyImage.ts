import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm"
import {Property} from './Property';

@Entity()
export class PropertyImage {

    @PrimaryGeneratedColumn()
    public Id: number;

    @Column({nullable: true})
    public Url: string;

    @ManyToOne(type => Property, property => property.PropertyImages)
    public Property: Property;
}
