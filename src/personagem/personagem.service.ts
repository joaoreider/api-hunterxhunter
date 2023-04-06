import { Injectable } from '@nestjs/common';
import { CreatePersonagemDto } from './dto/create-personagem.dto';
import { UpdatePersonagemDto } from './dto/update-personagem.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PersonagemService {

  constructor(private readonly prisma: PrismaService) {}

  create(createPersonagemDto: CreatePersonagemDto) {
    return this.prisma.personagem.create({
      data: {
        ...createPersonagemDto
      }
    });
  }

  findAll() {
    return this.prisma.personagem.findMany()
  }

  findOne(id: number) {
    return this.prisma.personagem.findUnique({where: {id}});
  }

  update(id: number, data: UpdatePersonagemDto) {
    return this.prisma.personagem.update({
      where: {id},
      data
    });
  }

  remove(id: number) {
    return this.prisma.personagem.delete({where: {id}});
  }
}
