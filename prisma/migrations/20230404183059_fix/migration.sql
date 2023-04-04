/*
  Warnings:

  - You are about to drop the column `personagemId` on the `Habilidade` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Habilidade" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "efeito" TEXT NOT NULL
);
INSERT INTO "new_Habilidade" ("efeito", "id", "nome") SELECT "efeito", "id", "nome" FROM "Habilidade";
DROP TABLE "Habilidade";
ALTER TABLE "new_Habilidade" RENAME TO "Habilidade";
CREATE UNIQUE INDEX "Habilidade_nome_key" ON "Habilidade"("nome");
CREATE UNIQUE INDEX "Habilidade_efeito_key" ON "Habilidade"("efeito");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
