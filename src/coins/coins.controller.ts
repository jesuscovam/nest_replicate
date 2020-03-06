import { Controller, Get, Query, ValidationPipe, Param, ParseIntPipe, Post, Body, Delete, Patch } from '@nestjs/common';
import { GetCoinsWithFilters } from './dto/getWithFilters.dto';
import { Coin } from './coin.entity';
import { CreateCoinDto } from './dto/createCoin.dto';
import { ValidateCoinStatus } from './pipes/create.coin.pipe';
import { CoinStatus } from './status.enum';
import { CoinsService } from './coins.service';

@Controller('coins')
export class CoinsController {
    constructor(private coinServices: CoinsService) {}


    @Get()
    getCoins(@Query(ValidationPipe) getCoinsFilter: GetCoinsWithFilters): Promise<Coin[]>{
        return this.coinServices.getCoins(getCoinsFilter)
    }

    @Get('/:id')
    getCoinById(@Param('id', ParseIntPipe) id: number): Promise<Coin>{
        return this.coinServices.getCoinById(id)
    }

    @Post()
    createCoin(@Body() createCoinDto: CreateCoinDto): Promise<Coin>{
        return this.coinServices.createCoin(createCoinDto);
    }

    @Delete('/:id')
    deleteById(@Param('id', ParseIntPipe) id: number): Promise<void>{
        return this.coinServices.deleteById(id)
    }

    @Patch('/:id/status')
    updateStatus(
        @Param('id', ParseIntPipe) id: number,
        @Body('status', ValidateCoinStatus) status: CoinStatus
    ): Promise<Coin>{
        return this.coinServices.updateCoin(id, status)
    }
}
