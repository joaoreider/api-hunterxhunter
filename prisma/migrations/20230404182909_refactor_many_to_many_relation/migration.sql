/*
  Warnings:

  - You are about to drop the `Personagens_habilidades` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "Habilidade" ADD COLUMN "personagemId" INTEGER;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Personagens_habilidades";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "_HabilidadeToPersonagem" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_HabilidadeToPersonagem_A_fkey" FOREIGN KEY ("A") REFERENCES "Habilidade" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_HabilidadeToPersonagem_B_fkey" FOREIGN KEY ("B") REFERENCES "Personagem" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_HabilidadeToPersonagem_AB_unique" ON "_HabilidadeToPersonagem"("A", "B");

-- CreateIndex
CREATE INDEX "_HabilidadeToPersonagem_B_index" ON "_HabilidadeToPersonagem"("B");
