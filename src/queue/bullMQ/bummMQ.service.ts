import { InjectQueue } from '@nestjs/bullmq';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bullmq';

// #2.1 producers
@Injectable()
export default class BullMQService {
  constructor(@InjectQueue('test') private readonly testQueue: Queue) {}

  // #2.2 producers
  async addJob() {
    const job = await this.testQueue.add('testData', {
      data: "011010111" ,
    });
  }
}
