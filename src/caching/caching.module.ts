import { Module } from '@nestjs/common';
import { CachingController } from './caching.controller';
import { CacheInterceptor, CacheModule } from '@nestjs/cache-manager';
import { AutoCachingController } from './auto-caching-controller';
import { APP_INTERCEPTOR } from '@nestjs/core';

// #1 in-memory cache
@Module({
  imports: [
    // #4 Customize caching
    CacheModule.register({ ttl: 5000, max: 10 }),
    // #5 Use module globally
    // CacheModule.register({ isGlobal: true }),
  ],
  controllers: [CachingController, AutoCachingController],
  providers: [
    // #3.2 Auto-caching responses
    /*
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
    */
  ],
})
export class CachingModule {}
