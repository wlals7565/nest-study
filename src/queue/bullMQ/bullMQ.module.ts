import { BullModule } from '@nestjs/bullmq';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import BullMQController from './bullMQ.controller';
import BullMQService from './bummMQ.service';
import BullMQConsumer from './bullMQ.consumer';
import BullMQEventListener from './bullMQ.event-listener';
import { join } from 'path';

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
          password: configService.get('REDIS_PASSWORD'),
        },
      }),
    }),
    BullModule.registerQueue({ name: 'processor',processors: [join(__dirname, 'processor.js')]}),
    // #1.2 BullMQ Setting
    BullModule.registerQueue({
      name: 'test',
    }),
    // #1.3 BullMQ Setting
    BullModule.registerFlowProducer({
      name: 'FlowProducerTest',
    }),
  ],
  controllers: [BullMQController],
  providers: [
    BullMQService,
    BullMQConsumer,
    BullMQEventListener
  ],
})
export default class BullMQModule {}
