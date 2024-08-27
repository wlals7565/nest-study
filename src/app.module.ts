import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ValidationModule } from './validation/validation.module';
import { CachingModule } from './caching/caching.module';
import { WebsocketModule } from './websocket/websocket.module';
import { SerializationModule } from './serialization/serialization.module';

@Module({
  imports: [ValidationModule, CachingModule, WebsocketModule, SerializationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
