import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServerController } from './server.controller';

@Module({
  controllers: [ServerController],
})
export class ServerModule {}
