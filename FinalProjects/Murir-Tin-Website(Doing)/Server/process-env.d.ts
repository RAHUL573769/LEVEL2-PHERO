declare namespace NodeJS {
  export type ProcessEnv = {
    PORT1: number;
    DATABASE_URL_LOCAL: string;
    DATABASE_URL: string;
    NODE_ENV: string;
  };
}
