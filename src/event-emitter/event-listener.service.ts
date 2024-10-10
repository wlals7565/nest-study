import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';

@Injectable()
export default class EventListenerService {
  @OnEvent('data.created')
  handleOrderCreatedEvent(event: string) {
    // handle and process "OrderCreatedEvent" event
    console.log(event);
  }
}
