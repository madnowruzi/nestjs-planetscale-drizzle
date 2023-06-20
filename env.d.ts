/* eslint-disable @typescript-eslint/no-unused-vars */

namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'production' | 'development' | 'test' | string;
    PROD_BRANCH_URL: string;
    DEV_BRANCH_URL: string;
  }
}
