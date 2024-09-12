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

  @Post('interval')
  createInterval(@Body() body) {
    this.schedulingService.createInterval(body.name, body.milliseconds)
  }

  @Post('timeout')
  createTimeout(@Body() body) {
    this.schedulingService.createTimeout(body.name, body.milliseconds)
  }

  @Post(':name')
  deleteCronJob(@Param('name') name: string) {
    this.schedulingService.deleteCronJob(name);
    return { message: 'done' };
  }

  @Post('interval/:name')
  deleteInterval(@Param('name') name: string) {
    this.schedulingService.deleteInterval(name);
    return { message: 'done' };
  }

  @Post('timeout/:name')
  deleteTimeout(@Param('name') name: string) {
    this.schedulingService.deleteTimeout(name);
    return { message: 'done' };
  }
}
