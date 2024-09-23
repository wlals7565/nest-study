import { BullModule } from '@nestjs/bullmq';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

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
    BullModule.registerFlowProducer({
      name:'FlowProducerTest'
    })
  ],
})
export default class BullMQModule {}
