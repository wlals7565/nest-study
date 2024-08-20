import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ValidationModule } from './validation/validation.module';
import { CachingModule } from './caching/caching.module';

@Module({
  imports: [ValidationModule, CachingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
