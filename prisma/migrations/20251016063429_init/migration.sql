-- CreateTable
CREATE TABLE "storydb" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "writter" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "storydb_pkey" PRIMARY KEY ("id")
);
