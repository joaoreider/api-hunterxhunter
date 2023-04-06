import { Prisma } from "@prisma/client";
import { Personagem } from "../entities/personagem.entity";

export class CreatePersonagemDto extends  Personagem{

    // escrever validacoes e campos que quero que estejam no createDTO

    nome: string;
    descricao: string;
    img_url: string | null;
    tipoId?: number;
    habilidades?: Prisma.HabilidadeUncheckedCreateNestedManyWithoutPersonagemInput;
}
