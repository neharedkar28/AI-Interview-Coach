/*
  Warnings:

  - You are about to drop the `Resume` table. If the table is not empty, all the data it contains will be lost.
  - The primary key for the `Interview` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `answer` on the `Interview` table. All the data in the column will be lost.
  - You are about to drop the column `communication` on the `Interview` table. All the data in the column will be lost.
  - You are about to drop the column `confidence` on the `Interview` table. All the data in the column will be lost.
  - You are about to drop the column `question` on the `Interview` table. All the data in the column will be lost.
  - You are about to drop the column `technicalScore` on the `Interview` table. All the data in the column will be lost.
  - You are about to alter the column `id` on the `Interview` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - Added the required column `questions` to the `Interview` table without a default value. This is not possible if the table is not empty.
  - Added the required column `skill` to the `Interview` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Resume";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Interview" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "skill" TEXT NOT NULL,
    "questions" TEXT NOT NULL,
    "score" REAL,
    "feedback" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Interview" ("createdAt", "feedback", "id") SELECT "createdAt", "feedback", "id" FROM "Interview";
DROP TABLE "Interview";
ALTER TABLE "new_Interview" RENAME TO "Interview";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
