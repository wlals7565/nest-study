import { Controller, Get } from '@nestjs/common';

// #5 Usage
@Controller('versioning')
export class VersioningController {
  @Get()
  async helloWorld() {
    return 'hello Versioning';
  }
}
