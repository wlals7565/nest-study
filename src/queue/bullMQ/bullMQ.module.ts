import { BullModule } from '@nestjs/bullmq';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import BullMQController from './bullMQ.controller';
import BullMQService from './bummMQ.service';
import BullMQConsumer from './bullMQ.consumer';

// #1.1 BullMQ Setting
@Module({
  imports: [
    BullModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        connection: {
          host: configService.get('REDIS_HOST'),
          port: configService.get('REDIS_PORT'),
          password: configService.get('REDIS_PASSWORD')
        },
      }),
    }),
    // #1.2 BullMQ Setting
    BullModule.registerQueue({
      name: 'test'
    }),
    // #1.3 BullMQ Setting
    BullModule.registerFlowProducer({
      name:'FlowProducerTest'
    })
  ],
  controllers: [BullMQController],
  providers: [BullMQService, BullMQConsumer]
})
export default class BullMQModule {}
