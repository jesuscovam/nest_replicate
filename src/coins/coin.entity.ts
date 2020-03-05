import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { CoinStatus } from "./status.enum";

@Entity()
export class Coin extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    status: CoinStatus;
}