// #3.1 Auto-caching responses
import { CacheInterceptor, CacheKey, CacheTTL } from '@nestjs/cache-manager';
import { Body, Controller, Get, Post, UseInterceptors } from '@nestjs/common';

@Controller('auto-cache')
@UseInterceptors(CacheInterceptor)
export class AutoCachingController {
  private array: number[];
  constructor() {
    this.array = [];
  }

  @Get()
  getCachedArray() {
    console.log('getCachedArray is called');
    return { data: this.array };
  }

  @Post()
  pushValueInArray(@Body('num') num: number) {
    this.array.push(num);
  }
  // #6 Global cache overrides
  @CacheKey('test')
  @CacheTTL(2000)
  @Get('overrided')
  overridedCache() {
    console.log('overridedCache is called');
    return this.array;
  }
}
