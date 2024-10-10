import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';

// # 2.1 Dispatching Events
@Injectable()
export default class EventEmitter2Service {
  constructor(private eventEmitter: EventEmitter2) {}

  // # 2.2 Dispatching Events
  async makeEvent() {
    this.eventEmitter.emit(
      'data.created',
      'data is comming',
    );
  }
}
