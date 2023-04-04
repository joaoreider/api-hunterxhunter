import { Module } from '@nestjs/common';
import { PersonagemService } from './personagem.service';
import { PersonagemController } from './personagem.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [PersonagemController],
  providers: [PersonagemService, PrismaService]
})
export class PersonagemModule {}
