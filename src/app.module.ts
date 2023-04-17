import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonagemModule } from './personagem/personagem.module';
import { UserModule } from './user/user.module';


@Module({
  imports: [PersonagemModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
