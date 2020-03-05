import { Module } from '@nestjs/common';
import { CoinsModule } from './coins/coins.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/config.data';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig),
    CoinsModule],
})
export class AppModule {}
