import { Module } from '@nestjs/common';
import { CachingController } from './caching.controller';
import { CachingService } from './caching.service';
import { CacheModule } from '@nestjs/cache-manager';

// #1 in-memory cache
@Module({
  imports: [CacheModule.register()],
  controllers: [CachingController],
  providers: [CachingService],
})
export class CachingModule {}
