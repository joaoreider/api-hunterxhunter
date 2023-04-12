import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, Res } from '@nestjs/common';
import { PersonagemService } from './personagem.service';
import { CreatePersonagemDto } from './dto/create-personagem.dto';
import { UpdatePersonagemDto } from './dto/update-personagem.dto';

@Controller('personagem')
export class PersonagemController {
  constructor(private readonly personagemService: PersonagemService) {}

  @Post()
  create(@Body() createPersonagemDto: CreatePersonagemDto) {
    return this.personagemService.create(createPersonagemDto);
  }

  @Get()
  findAll() {
    return this.personagemService.findAll();
  }

  @Get(':nome')
  async findOne(@Param('nome') nome: string) {
   return await this.personagemService.findOne(nome);
   
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePersonagemDto: UpdatePersonagemDto) {
    return this.personagemService.update(+id, updatePersonagemDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.personagemService.remove(+id);
  }
}
