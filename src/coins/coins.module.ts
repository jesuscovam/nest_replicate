import { Module } from '@nestjs/common';
import { CoinsService } from './coins.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoinRepository } from './coin.repositoy';
import { CoinsController } from './coins.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CoinRepository])],
  controllers: [CoinsController],
  providers: [CoinsService]
})
export class CoinsModule {}
