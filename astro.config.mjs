import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://home.hiapis.cloud",
  vite: {
    server: {
      allowedHosts: ["home.hiapis.cloud"]
    }
  }
});
