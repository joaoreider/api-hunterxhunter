import { Prisma } from "@prisma/client";
import { Personagem } from "../entities/personagem.entity";
import {IsString, IsNotEmpty, IsUrl, IsOptional} from "class-validator";

export class CreatePersonagemDto extends  Personagem{

    @IsString({message: 'O nome deve ser uma string.'})
    @IsNotEmpty({message: 'O nome não pode ser vazio.'})
    nome: string;

    @IsString({message: 'A descrição deve ser uma string.'})
    @IsNotEmpty({message: 'A descrição não pode ser vazia.'})
    descricao: string;

    @IsUrl()
    @IsNotEmpty({message: 'A descrição não pode ser vazia.'})
    img_url: string | null;

    @IsOptional()
    tipoId?: number;

    @IsOptional()
    habilidades?: Prisma.HabilidadeUncheckedCreateNestedManyWithoutPersonagemInput;
}
