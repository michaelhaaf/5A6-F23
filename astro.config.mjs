import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Application Development II",
      social: {
        github: "https://github.com/michaelhaaf/5A6-F23",
      },
      sidebar: [
        {
          label: "About",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "This Site", link: "/about/this-site/" },
          ],
        },
        {
          label: "Assignments",
          autogenerate: { directory: "assignments" },
        },
      ],
    }),
  ],

  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: { service: { entrypoint: "astro/assets/services/sharp" } },
  site: "https://michaelhaaf.github.io",
});
