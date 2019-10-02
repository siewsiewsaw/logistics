import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class cargo {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    cargotype: string;

    @Column()
    cargoweight: number;

    @Column()
    cargowidth: number;

    @Column()
    cargolength: number;

    @Column()
    cardgoheight: number;

    @Column()
    description: string;

    @Column()
    disclaimers: string;

    @Column()
    isHarzard: boolean;

    @Column()
    insuranced: boolean;

    @Column()
    originadd: string;

    @Column()
    originstate: string;

    @Column()
    origincountry: string;

    @Column()
    originpostcode: number;

    @Column()
    origincontact: string;

    @Column()
    destadd: string;

    @Column()
    deststate: string;

    @Column()
    destcountry: string;

    @Column()
    destpostcode: number;

    @Column()
    destcontact: string;
    
    @Column()
    shippingdate: Date;
}