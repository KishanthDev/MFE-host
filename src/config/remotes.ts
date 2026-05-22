export const REMOTE_CONFIG = {
  dev: {
    dashboard:
      "http://localhost:5001/assets/remoteEntry.js",

    profile:
      "http://localhost:5002/assets/remoteEntry.js",
  },

  stg: {
    dashboard:
      "https://mfe-dashboard-jet.vercel.app/assets/remoteEntry.js",

    profile:
      "https://mfe-profile.vercel.app/assets/remoteEntry.js",
  },
} as const;