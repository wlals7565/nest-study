import {Processor, WorkerHost} from '@nestjs/bullmq'
import { Job } from 'bullmq';

// #3.1 consumer
@Processor('test')
export default class BullMQConsumer extends WorkerHost {
  // #3.2 consumer
  async process(job: Job): Promise<any> {
    console.log(job);
    return {}
  }
  
}