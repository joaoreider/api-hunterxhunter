import { Injectable } from '@nestjs/common';
import { CreatePersonagemDto } from './dto/create-personagem.dto';
import { UpdatePersonagemDto } from './dto/update-personagem.dto';

@Injectable()
export class PersonagemService {
  create(createPersonagemDto: CreatePersonagemDto) {
    return 'This action adds a new personagem';
  }

  findAll() {
    return `This action returns all personagem`;
  }

  findOne(id: number) {
    return `This action returns a #${id} personagem`;
  }

  update(id: number, updatePersonagemDto: UpdatePersonagemDto) {
    return `This action updates a #${id} personagem`;
  }

  remove(id: number) {
    return `This action removes a #${id} personagem`;
  }
}
