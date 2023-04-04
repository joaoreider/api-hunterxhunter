-- CreateTable
CREATE TABLE "Personagem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "img_url" TEXT NOT NULL,
    "tipoId" INTEGER NOT NULL,
    CONSTRAINT "Personagem_tipoId_fkey" FOREIGN KEY ("tipoId") REFERENCES "Tipo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Habilidade" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "efeito" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Tipo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Personagens_habilidades" (
    "personagemId" INTEGER NOT NULL,
    "habilidadeId" INTEGER NOT NULL,

    PRIMARY KEY ("personagemId", "habilidadeId"),
    CONSTRAINT "Personagens_habilidades_personagemId_fkey" FOREIGN KEY ("personagemId") REFERENCES "Personagem" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Personagens_habilidades_habilidadeId_fkey" FOREIGN KEY ("habilidadeId") REFERENCES "Habilidade" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Personagem_nome_key" ON "Personagem"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "Habilidade_nome_key" ON "Habilidade"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "Habilidade_efeito_key" ON "Habilidade"("efeito");

-- CreateIndex
CREATE UNIQUE INDEX "Tipo_nome_key" ON "Tipo"("nome");
