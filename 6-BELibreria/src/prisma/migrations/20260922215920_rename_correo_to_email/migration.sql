/*
  Warnings:

  - You are about to drop the column `correo` on the `author` table. All the data in the column will be lost.
  - You are about to drop the column `correo` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `user` table. All the data in the column will be lost.
  - Added the required column `email` to the `author` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "author" DROP COLUMN "correo",
ADD COLUMN     "email" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "user" DROP COLUMN "correo",
DROP COLUMN "name",
ADD COLUMN     "email" TEXT NOT NULL;
