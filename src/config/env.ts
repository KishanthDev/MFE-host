import { REMOTE_CONFIG } from "./remotes";

export type AppEnv = keyof typeof REMOTE_CONFIG;

const DEFAULT_ENV: AppEnv = "stg";

export function getAppEnv(env?: string): AppEnv {
  if (env && env in REMOTE_CONFIG) {
    return env as AppEnv;
  }

  console.warn(`
⚠️ Invalid VITE_ENV="${env}"
➡️ Falling back to "${DEFAULT_ENV}"
`);

  return DEFAULT_ENV;
}