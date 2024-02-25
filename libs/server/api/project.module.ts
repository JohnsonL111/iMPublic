import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectController } from './project.controller';

@Module({
  controllers: [ProjectController],
})
export class ProjectModule {}
