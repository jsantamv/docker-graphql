import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true, 
    })
  );

  console.log('APLICACIÓN INICIANDO...');
  await app.listen(3000);  
  console.log('APLICACIÓN CORRIENDO EN PUERTO: ', 3000 );
}
bootstrap();
