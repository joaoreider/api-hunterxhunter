import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import {DocumentBuilder, SwaggerDocumentOptions, SwaggerModule } from '@nestjs/swagger';
import { PersonagemController } from './personagem/personagem.controller';
import { PersonagemModule } from './personagem/personagem.module';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe()); 
  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('Hunxter x Hunter API')
    .setDescription('You can now get information of HunterXHunter anime characters')
    .setVersion('1.0')
    .addTag('Personagens')
    .build();
  
  const options: SwaggerDocumentOptions =  {
      include: [PersonagemModule]
    };
  const document = SwaggerModule.createDocument(app, config, options);

  SwaggerModule.setup('api-docs', app, document);

  await app.listen(3000);
}
bootstrap();
