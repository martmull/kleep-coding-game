-- CreateEnum
CREATE TYPE "InfoType" AS ENUM ('NUMBER', 'TEXT', 'DATE');

-- CreateTable
CREATE TABLE "BadGuy" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,

    CONSTRAINT "BadGuy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Info" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" "InfoType" NOT NULL,

    CONSTRAINT "Info_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Request" (
    "id" SERIAL NOT NULL,
    "badGuyId" INTEGER NOT NULL,
    "infoId" INTEGER NOT NULL,

    CONSTRAINT "Request_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BadGuy_slug_key" ON "BadGuy"("slug");

-- AddForeignKey
ALTER TABLE "Request" ADD CONSTRAINT "Request_badGuyId_fkey" FOREIGN KEY ("badGuyId") REFERENCES "BadGuy"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Request" ADD CONSTRAINT "Request_infoId_fkey" FOREIGN KEY ("infoId") REFERENCES "Info"("id") ON DELETE CASCADE ON UPDATE CASCADE;
