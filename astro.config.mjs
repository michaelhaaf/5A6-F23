import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import overrideIntegration from "./src/overrideIntegration.mjs";

import markdoc from "@astrojs/markdoc";

import expressiveCode from "astro-expressive-code";
const expressiveCodeOpts = {
  theme: ["rose-pine-moon"],
}


// https://astro.build/config
export default defineConfig({
  integrations: [overrideIntegration(), expressiveCode(expressiveCodeOpts), starlight({
    title: "Application Development II",
    logo: {
      light: "./src/assets/logo.svg",
      dark: "./src/assets/logo.svg"
    },
    customCss: ["./src/styles/style.css", "./src/fonts/font-faces.css"],
    lastUpdated: true,
    pagination: true,
    social: {
      gitlab: "https://moodle.johnabbott.qc.ca/course/view.php?id=452",
      github: "https://github.com/michaelhaaf/5A6-F23"
    },
    sidebar: [{
      label: "About",
      autogenerate: {
        directory: "about"
      },
      collapsed: false
    }, {
      label: "Lectures",
      autogenerate: {
        directory: "lectures"
      },
      collapsed: false
    }, {
      label: "Assignments",
      autogenerate: {
        directory: "assignments"
      },
      collapsed: false
    }, {
      label: "Project",
      autogenerate: {
        directory: "project"
      },
      customCss: ["./src/styles/style.css", "./src/fonts/font-faces.css"],
      lastUpdated: true,
      pagination: true,
      social: {
        gitlab: "https://moodle.johnabbott.qc.ca/course/view.php?id=452",
        github: "https://github.com/michaelhaaf/5A6-F23",
      },
      sidebar: [
        {
          label: "About",
          autogenerate: {
            directory: "about",
          },
          collapsed: false,
        },
        {
          label: "Lectures",
          autogenerate: {
            directory: "lectures",
          },
          collapsed: false,
        },
        {
          label: "Assignments",
          autogenerate: {
            directory: "assignments",
          },
          collapsed: false,
        },
        {
          label: "Project",
          autogenerate: {
            directory: "project",
          },
          collapsed: false,
        },
      ],
    }),
    markdoc(),
  ],
  site: "https://michaelhaaf.github.io",
  base: "5A6-F23",
  experimental: {
    assets: true,
  },
});
