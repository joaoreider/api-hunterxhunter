import { HttpStatus, Injectable } from '@nestjs/common';
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
        efeito: true,
        
      }
    },
    tipo: {
      select: {
        nome: true
      }
    }
  };

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
        const resultado = personagens.length > 0 ? {status: HttpStatus.OK, message: personagens } : {status: HttpStatus.NOT_FOUND, message: "Personagem não encontrado"};
        return Promise.resolve(resultado);
      });

    } catch {
      return {status: HttpStatus.INTERNAL_SERVER_ERROR, message: "Erro interno do sistema"}
    
    }


  }

  update(id: number, data: UpdatePersonagemDto) {
    return this.prisma.personagem.update({
      where: {id},
      data,
      include: this.include
    });
  }

  remove(id: number) {
    return this.prisma.personagem.delete({where: {id}});
  }
}
