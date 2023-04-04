-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Personagem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "img_url" TEXT NOT NULL,
    "tipoId" INTEGER,
    CONSTRAINT "Personagem_tipoId_fkey" FOREIGN KEY ("tipoId") REFERENCES "Tipo" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Personagem" ("descricao", "id", "img_url", "nome", "tipoId") SELECT "descricao", "id", "img_url", "nome", "tipoId" FROM "Personagem";
DROP TABLE "Personagem";
ALTER TABLE "new_Personagem" RENAME TO "Personagem";
CREATE UNIQUE INDEX "Personagem_nome_key" ON "Personagem"("nome");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
