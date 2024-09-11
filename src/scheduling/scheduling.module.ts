import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import TaskMangerService from './task-manager.service';
import { SchedulingController } from './scheduling.controller';
import { SchedulingService } from './scheduling.service';

// #1. Installation
@Module({
  imports: [ScheduleModule.forRoot()],
  providers: [
    //TaskMangerService
    SchedulingService,
  ],
  controllers: [SchedulingController],
})
export class SchedulingModule {}
