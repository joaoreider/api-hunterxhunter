/*
  Warnings:

  - You are about to drop the `_HabilidadeToPersonagem` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX "_HabilidadeToPersonagem_B_index";

-- DropIndex
DROP INDEX "_HabilidadeToPersonagem_AB_unique";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_HabilidadeToPersonagem";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Habilidade" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "efeito" TEXT NOT NULL,
    "personagemId" INTEGER,
    CONSTRAINT "Habilidade_personagemId_fkey" FOREIGN KEY ("personagemId") REFERENCES "Personagem" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Habilidade" ("efeito", "id", "nome") SELECT "efeito", "id", "nome" FROM "Habilidade";
DROP TABLE "Habilidade";
ALTER TABLE "new_Habilidade" RENAME TO "Habilidade";
CREATE UNIQUE INDEX "Habilidade_nome_key" ON "Habilidade"("nome");
CREATE UNIQUE INDEX "Habilidade_efeito_key" ON "Habilidade"("efeito");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
