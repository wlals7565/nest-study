import { Job } from 'bullmq';

export default async function processor(job: Job) {
  console.log('Processing job:', job.id);
  // 작업 처리 로직을 여기에 작성합니다.
  return { result: 'success' };
}