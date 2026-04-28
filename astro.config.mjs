import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://home.hiapis.cloud",
  devToolbar: {
    enabled: false
  },
  vite: {
    server: {
      allowedHosts: ["home.hiapis.cloud"]
    }
  }
});
