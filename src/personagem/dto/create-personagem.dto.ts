import { Prisma } from "@prisma/client";
import { Personagem } from "../entities/personagem.entity";
import {IsString, IsNotEmpty, IsUrl, IsOptional} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreatePersonagemDto extends  Personagem{

    @ApiProperty({
        description: 'Nome do personagem',
        example: 'Killua',
    })
    @IsString({message: 'O nome deve ser uma string.'})
    @IsNotEmpty({message: 'O nome não pode ser vazio.'})
    nome: string;

    @ApiProperty()
    @IsString({message: 'A descrição deve ser uma string.'})
    @IsNotEmpty({message: 'A descrição não pode ser vazia.'})
    descricao: string;

    @ApiProperty({
        description: 'Url da imagem do personagem',
        example: 'https://static.wikia.nocookie.net/hunterxhunter/images/f/fd/HxH2011_EP5_Gon_feeling_excited.png/revision/latest?cb=20221126070501',
    })
    @IsUrl()
    @IsNotEmpty({message: 'A descrição não pode ser vazia.'})
    img_url: string | null;

    @ApiProperty()
    @IsOptional()
    tipoId?: number;

    @ApiProperty()
    @IsOptional()
    habilidades?: Prisma.HabilidadeUncheckedCreateNestedManyWithoutPersonagemInput;

    

}
