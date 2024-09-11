import { Injectable, Logger } from '@nestjs/common';
import {
  Cron,
  CronExpression,
  Interval,
  SchedulerRegistry,
  Timeout,
} from '@nestjs/schedule';

// #2.1 Declarative cron jobs
@Injectable()
export default class TaskMangerService {
  private readonly logger = new Logger(TaskMangerService.name);
  // #5 Dynamic schedule module API
  constructor(private readonly schedulerRegistry: SchedulerRegistry) {}

  @Cron('5 * * * * *')
  handleCron() {
    this.logger.debug('Called when the current second is 5');
  }

  // #2.2 Declarative cron jobs
  @Cron(CronExpression.EVERY_10_SECONDS)
  handleCronByCronExpression() {
    this.logger.debug('Called every 10 seconds');
  }

  // #3 Declarative intervals
  @Interval(3000)
  handleInterval() {
    this.logger.debug('Called every 3 seconds');
  }

  // #4 Declarative timeouts
  @Timeout(5000)
  handleTimeout() {
    this.logger.debug('Called after 5 seconds');
  }
}
