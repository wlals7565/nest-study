import { Controller, Get } from "@nestjs/common";
import EventEmitter2Service from "./event-emitter.service";

@Controller('event')
export default class EventEmitter2Controller {
  constructor(private eventEmitter2Service: EventEmitter2Service) {}

  @Get()
  async makeEvent() {
    this.eventEmitter2Service.makeEvent()
    return {msg: 'done'}
  }
}