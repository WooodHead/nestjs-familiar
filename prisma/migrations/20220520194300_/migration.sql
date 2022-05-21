-- CreateTable
CREATE TABLE "Admin" (
    "id" TEXT NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "refreshToken" VARCHAR(255) NOT NULL,
    "leagueId" TEXT NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Admin" ADD CONSTRAINT "Admin_leagueId_fkey" FOREIGN KEY ("leagueId") REFERENCES "League"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
