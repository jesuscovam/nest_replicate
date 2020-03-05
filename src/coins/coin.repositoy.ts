import { Repository, EntityRepository } from "typeorm";

import { Coin } from "./coin.entity";
import { CreateCoinDto } from "./dto/createCoin.dto";
import { CoinStatus } from "./status.enum";

@EntityRepository(Coin)
export class CoinRepository extends Repository<Coin>{
    
    async createCoin(createCoinDto: CreateCoinDto): Promise<Coin>{
        const { title, description } = createCoinDto
        const coin = new Coin()
        coin.title = title
        coin.description = description
        coin.status = CoinStatus.OPEN
        await coin.save()
        return coin;
    }
}