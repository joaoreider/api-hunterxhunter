import { HttpException, HttpStatus, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreatePersonagemDto } from './dto/create-personagem.dto';
import { UpdatePersonagemDto } from './dto/update-personagem.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PersonagemService {

  constructor(private readonly prisma: PrismaService) {}

  private readonly include = {
    habilidades: {
      select: {
        nome: true,  
      }
    },
    tipo: {
      select: {
        nome: true
      }
    }
  };

  private async existePersonagem(id: number){
    const personagem = await this.prisma.personagem.findUnique({where: {id}})
    if (!personagem){
      return false
    }
    return true
  }

  create(createPersonagemDto: CreatePersonagemDto) {
    return this.prisma.personagem.create({
      data: {
        ...createPersonagemDto
      },
      include: this.include
    });
  }

  findAll() {
    return this.prisma.personagem.findMany({include: this.include});
  }

  findOne(nome: string) {
    
    try {
      
     return this.prisma.personagem.findMany({
        
        where: {
          nome: {
            contains: nome
          }
        },
        include: this.include
      }).then((personagens) => {
        if (personagens.length > 0) {
          return Promise.resolve(personagens)
        }
        throw new NotFoundException('Personagem não encontrado')
      });

    } catch {
      throw new InternalServerErrorException()
    
    }


  }

  async update(id: number, data: UpdatePersonagemDto) {

    const personagem = await this.existePersonagem(id)
    if (personagem ){
      return this.prisma.personagem.update({
        where: {id},
        data,
        include: this.include
      });
    }
    throw new NotFoundException('Personagem não encontrado')
  }

  async remove(id: number) {

    const personagem = await this.existePersonagem(id)

    if (personagem ){
      return this.prisma.personagem.delete({where: {id}})
    } 

    throw new NotFoundException('Personagem não encontrado')
    
    
  }
}
