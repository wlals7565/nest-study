import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
/*
import { ValidationModule } from './validation/validation.module';
import { CachingModule } from './caching/caching.module';
import { WebsocketModule } from './websocket/websocket.module';
import { SerializationModule } from './serialization/serialization.module';
import { VersioningModule } from './versioning/versioning.module';
import { SchedulingModule } from './scheduling/scheduling.module';
*/
import BullMQModule from './queue/bullMQ/bullMQ.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    //ConfigModule.forRoot({isGlobal: true})
    //ValidationModule,
    //CachingModule,
    //WebsocketModule,
    //SerializationModule,
    //VersioningModule,
    //SchedulingModule,
    //BullMQModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
