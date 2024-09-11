import { Controller, Get, Version, VERSION_NEUTRAL } from '@nestjs/common';

// #5 Controller versions
@Controller({ path: 'versioning', version: '1' })
export class VersioningController {
  @Get()
  async helloWorld() {
    return 'hello Versioning';
  }

  // #6 route version
  @Version('2')
  @Get('routeVersioning')
  async routeVersioning() {
    return 'routeVersioning';
  }

  // #6 multiple versions
  @Version(['1', '2'])
  @Get('multipleVersioning')
  async multipleVersioning() {
    return 'multipleVersioning';
  }

  // #7 version Netral
  @Version(VERSION_NEUTRAL)
  @Get('versionNetral')
  async versionNetral() {
    return 'versionNetral';
  }
}
