ALTER TABLE "product" ADD COLUMN "userId" varchar(256) NOT NULL;--> statement-breakpoint
ALTER TABLE "product" DROP COLUMN IF EXISTS "user_id";