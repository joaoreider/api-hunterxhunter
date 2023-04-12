/*
  Warnings:

  - You are about to drop the column `efeito` on the `Habilidade` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Habilidade" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "personagemId" INTEGER,
    CONSTRAINT "Habilidade_personagemId_fkey" FOREIGN KEY ("personagemId") REFERENCES "Personagem" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Habilidade" ("id", "nome", "personagemId") SELECT "id", "nome", "personagemId" FROM "Habilidade";
DROP TABLE "Habilidade";
ALTER TABLE "new_Habilidade" RENAME TO "Habilidade";
CREATE UNIQUE INDEX "Habilidade_nome_key" ON "Habilidade"("nome");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
