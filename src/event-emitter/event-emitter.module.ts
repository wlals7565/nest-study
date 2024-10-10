import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import EventEmitter2Service from './event-emitter.service';
import EventListenerService from './event-listener.service';
import EventEmitter2Controller from './event-emitter.controller';

// # 1.1 use event-emitter
@Module({
  imports: [
    EventEmitterModule.forRoot()
  ],
  providers: [EventEmitter2Service, EventListenerService],
  controllers: [EventEmitter2Controller]
})
export class EventEmitter2Module {}