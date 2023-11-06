import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import overrideIntegration from "./src/overrideIntegration.mjs";
import markdoc from "@astrojs/markdoc";
import { rehypeHeadingIds } from '@astrojs/markdown-remark';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

import expressiveCode from "astro-expressive-code";
const expressiveCodeOpts = {
  theme: ["rose-pine-moon", "rose-pine-dawn"],
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
      label: "Quizzes",
      autogenerate: {
        directory: "quizzes"
      },
      collapsed: false
    }, {
      label: "Lectures",
      items: [
        { label: "Topics to Review", link: "lectures/topics-to-review" },
        { label: "Talib's lecture notes", link: "lectures/talib-index" },
        { label: "Bonus Lecture: JAC on Strike!", link: "lectures/bonus-lecture" },
        { label: "Kotlin", autogenerate: { directory: "lectures/programming" }, collapsed: true },
        { label: "Jetpack Compose", autogenerate: { directory: "lectures/user-interfaces" }, collapsed: true },
        { label: "Software Development", autogenerate: { directory: "lectures/development" }, collapsed: true },
      ],
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
      collapsed: false
    },]
  }), markdoc()],
  site: "https://michaelhaaf.github.io",
  base: "5A6-F23",
  markdown: {
    rehypePlugins: [rehypeHeadingIds, [rehypeAutolinkHeadings, { behavior: 'wrap', properties: { ariaHidden: true, tabIndex: -1, class: 'heading-link' } }],],
  },
});
