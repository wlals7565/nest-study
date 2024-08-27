import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Controller, Inject, Get, Param } from '@nestjs/common';
import { Cache } from 'cache-manager';

// #2.1 Interacting with the Cache store
@Controller('caching')
export class CachingController {
  constructor(@Inject(CACHE_MANAGER) private cacheManger: Cache) {}

  // #2.2 Interacting with the Cache store
  @Get()
  async caching() {
    this.cacheManger.set('key', 'value');
    console.log(await this.cacheManger.get('key'));
  }

  // #2.3 Interacting with the Cache store
  @Get(':time')
  cachingWithTime(@Param('time') time: number) {
    this.cacheManger.set('time', 'LiveForTime', time);
  }

  // #2.4 Interacting with the Cache store
  @Get('/del/:key')
  deleteCachingHasKey(@Param('key') key: string) {
    this.cacheManger.del(key);
  }

  // #2.5 Interacting with the Cache store
  @Get('/reset')
  resetCaching() {
    this.cacheManger.reset();
  }
}
