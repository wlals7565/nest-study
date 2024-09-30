import { OnQueueEvent, QueueEventsHost, QueueEventsListener } from "@nestjs/bullmq";

// # 4.2 Event listener
@QueueEventsListener('test')
export default class BullMQEventListener extends QueueEventsHost {
  @OnQueueEvent('active')
  onActive(job: { jobId: string, prev?: string}) {
    console.log(`job ${job.jobId}`)
  }
}