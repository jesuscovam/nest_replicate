import { Controller, Get, Param, ParseIntPipe, Post, Body } from '@nestjs/common';
import { CoinsService } from './coins.service';
import { Coin } from './coin.entity';
import { CreateCoinDto } from './dto/createCoin.dto';

@Controller('coins')
export class CoinsController {
    constructor(private coinServices: CoinsService){}

    @Get('/:id')
    getCoinById(@Param('id', ParseIntPipe) id: number): Promise<Coin>{
        return this.coinServices.getCoinById(id)
    }

    @Post()
    createCoin(@Body() createCoinDto: CreateCoinDto): Promise<Coin>{
        return this.coinServices.createCoin(createCoinDto);
    }
}
