import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServerController } from './server.controller';
import { ServerService } from './server.service';

@Module({
  controllers: [ServerController],
  providers: [ServerService]
})
export class ServerModule {}
