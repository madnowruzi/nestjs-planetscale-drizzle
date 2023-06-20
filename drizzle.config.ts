import type { Config } from 'drizzle-kit';
import * as dotenv from 'dotenv'; // installed by @nestjs/config
dotenv.config();

export default {
  strict: false,
  driver: 'mysql2',
  schema: './src/_schemas/*',
  dbCredentials: {
    connectionString: process.env.DEV_BRANCH_URL,
  },
} satisfies Config;
