import { Injectable, BadRequestException } from '@nestjs/common';
import { CoinRepository } from './coin.repositoy';
import { InjectRepository } from '@nestjs/typeorm';
import { Coin } from './coin.entity';
import { CreateCoinDto } from './dto/createCoin.dto';

@Injectable()
export class CoinsService {
    constructor(
        @InjectRepository(CoinRepository)
        private coinRepository: CoinRepository
    ){}
    
    async getCoinById(id: number): Promise<Coin>{
        const found = await this.coinRepository.findOne(id);
        if (!found){
            throw new BadRequestException(`${id} is an invalid id`)
        } else {
            return found;
        }
    }

    async createCoin(createCoinDto: CreateCoinDto): Promise<Coin>{
        return this.coinRepository.createCoin(createCoinDto)
    }
}
