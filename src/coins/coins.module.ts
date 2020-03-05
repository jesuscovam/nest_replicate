import { Module } from '@nestjs/common';
import { CoinsController } from './coins.controller';
import { CoinsService } from './coins.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoinRepository } from './coin.repositoy';

@Module({
  imports: [TypeOrmModule.forFeature([CoinRepository])],
  controllers: [CoinsController],
  providers: [CoinsService]
})
export class CoinsModule {}
