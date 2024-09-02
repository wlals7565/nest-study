import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';
// #4 Custom Versioning Type
/*
const extractor = (request: Request): string | string[] =>
  [request.headers['custom-versioning-field'] ?? '']
    .flatMap((v) => v.split(','))
    .filter((v) => !!v)
    .sort()
    .reverse();
*/
// #2.1 Auto-validation
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  // #1 URI Versioning Type
  app.enableVersioning({
    type: VersioningType.URI,
  });
  // #2 Header Versioning Type
  /*
  app.enableVersioning({
    type: VersioningType.HEADER,
    header: 'Custom-Header',
  });
  */
  // #3 Media Type Versioning Type
  /*
  app.enableVersioning({
    type: VersioningType.MEDIA_TYPE,
    key: 'v=',
  });
  */
  // #4 Custom Versioning Type
  /*
  const app = await NestFactory.create(AppModule);
  app.enableVersioning({
    type: VersioningType.CUSTOM,
    extractor,
  });
  */
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
