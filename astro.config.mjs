import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Application Development II",
      logo: { light: "./src/assets/logo.svg", dark: "./src/assets/logo.svg" },
      customCss: [ 
        "./src/styles/style.css", 
        "./src/fonts/font-faces.css", 
      ],
      lastUpdated: true,
      social: {
        github: "https://github.com/michaelhaaf/5A6-F23",
      },
      sidebar: [
        {
          label: "About",
          autogenerate: { directory: "about" },
          collapsed: true,
        },
        {
          label: "Lectures",
          autogenerate: { directory: "lectures" },
          collapsed: true,
        },
        {
          label: "Tutorials",
          autogenerate: { directory: "tutorials" },
          collapsed: true,
        },
        {
          label: "Assignments",
          autogenerate: { directory: "assignments" },
          collapsed: true,
        },
        {
          label: "Exams",
          autogenerate: { directory: "exams" },
          collapsed: true,
        },
        {
          label: "Project",
          autogenerate: { directory: "project" },
          collapsed: true,
        },
        {
          label: "Resources",
          autogenerate: { directory: "resources" },
          collapsed: true,
        },
      ],
    }),
  ],
  site: "https://michaelhaaf.github.io",
  experimental: {
    assets: true
  },
});
