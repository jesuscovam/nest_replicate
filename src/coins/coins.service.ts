import { Injectable, BadRequestException } from '@nestjs/common';
import { CoinRepository } from './coin.repositoy';
import { InjectRepository } from '@nestjs/typeorm';
import { Coin } from './coin.entity';
import { CreateCoinDto } from './dto/createCoin.dto';
import { CoinStatus } from './status.enum';

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

    async deleteById(id: number): Promise<void>{
        const found = await this.getCoinById(id);
        await this.coinRepository.delete(found);
    }
    
    async updateCoin(id: number, status: CoinStatus): Promise<Coin>{
        const found = await this.getCoinById(id);
        found.status = status
        await found.save()
        return found;
    }
}
