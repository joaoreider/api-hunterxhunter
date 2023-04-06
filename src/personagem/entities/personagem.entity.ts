import { Prisma } from "@prisma/client";

export class Personagem implements Prisma.PersonagemUncheckedCreateInput{
    id?: number;
    nome: string;
    descricao: string;
    img_url: string;
    tipoId?: number;
    habilidades?: Prisma.HabilidadeUncheckedCreateNestedManyWithoutPersonagemInput;
}
