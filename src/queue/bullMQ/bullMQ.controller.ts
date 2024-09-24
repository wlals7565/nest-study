import { Body, Controller, Get, Post } from "@nestjs/common";
import BullMQService from "./bummMQ.service";

@Controller('bullMQ')
export default class BullMQController {
  constructor(private readonly bullMQService: BullMQService) {}

  @Get()
  async addJob() {
    return this.bullMQService.addJob();
  }
}