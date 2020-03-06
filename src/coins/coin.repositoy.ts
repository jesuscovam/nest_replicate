import { Repository, EntityRepository } from "typeorm";

import { Coin } from "./coin.entity";
import { CreateCoinDto } from "./dto/createCoin.dto";
import { CoinStatus } from "./status.enum";
import { GetCoinsWithFilters } from "./dto/getWithFilters.dto";

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

    async getCoins(getCoinFilters: GetCoinsWithFilters): Promise<Coin[]>{
        const { search, status } = getCoinFilters
        const query = await this.createQueryBuilder('coin')
        if(status){
            await query.andWhere('coin.status = :status', {status})
        }

        const coins = await query.getMany()
        return coins
    }

  
}