import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

// #2.1 Auto-validation
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  // #3 Disable detailed errors
  // app.useGlobalPipes(new ValidationPipe({ disableErrorMessages: true }));
  // #4 Stripping properties
  /*app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }),
  );
  */
  // #5 Transform payload objects
  // app.useGlobalPipes(new ValidationPipe({ transform: true }));
  await app.listen(3000);
}
bootstrap();
