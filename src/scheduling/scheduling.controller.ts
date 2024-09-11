import { Body, Controller, Param, Post } from '@nestjs/common';
import { SchedulingService } from './scheduling.service';

@Controller('scheduling')
export class SchedulingController {
  constructor(private readonly schedulingService: SchedulingService) {}

  @Post()
  createCronJob(@Body() body) {
    this.schedulingService.createCronJob(body.seconds, body.name);
    return { message: 'done' };
  }

  @Post(':name')
  deleteCronJob(@Param('name') name: string) {
    this.schedulingService.deleteCronJob(name);
    return { message: 'done' };
  }
}
