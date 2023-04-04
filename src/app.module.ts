import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonagensModule } from './personagens/personagens.module';
import { PersonagemModule } from './personagem/personagem.module';

@Module({
  imports: [PersonagensModule, PersonagemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
