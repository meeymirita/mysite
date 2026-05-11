-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Skills" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "technology" TEXT NOT NULL,
    "icons" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true
);
INSERT INTO "new_Skills" ("icons", "id", "technology") SELECT "icons", "id", "technology" FROM "Skills";
DROP TABLE "Skills";
ALTER TABLE "new_Skills" RENAME TO "Skills";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
