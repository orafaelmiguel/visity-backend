-- CreateTable
CREATE TABLE "likes" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "postId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "likes_postId_fkey" FOREIGN KEY ("postId") REFERENCES "posts" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "likes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "likes_postId_userId_key" ON "likes"("postId", "userId");
