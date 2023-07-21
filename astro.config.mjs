import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Application Development II",
      logo: { light: "./src/assets/logo.svg", dark: "./src/assets/logo.svg" },
      customCss: [ "./src/styles/style.css", ],
      lastUpdated: true,
      social: {
        github: "https://github.com/michaelhaaf/5A6-F23",
      },
      sidebar: [
        {
          label: "About",
          autogenerate: { directory: "about" },
        },
        {
          label: "Lectures",
          autogenerate: { directory: "lectures" },
        },
        {
          label: "Tutorials",
          autogenerate: { directory: "tutorials" },
        },
        {
          label: "Assignments",
          autogenerate: { directory: "assignments" },
        },
        {
          label: "Resources",
          autogenerate: { directory: "resources" },
        },
      ],
    }),
  ],

  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: { service: { entrypoint: "astro/assets/services/sharp" } },
  site: "https://michaelhaaf.github.io",
});
