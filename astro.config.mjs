import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Simmons Tech",
      logo: {
        src: "./src/assets/simmons-logo.png",
      },
      social: {
        github: "https://github.com/simmons-tech",
      },
      editLink: {
        baseUrl:
          "https://github.com/dtemkin1/simmons-tech-docs/edit/main/docs/",
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", link: "/guides/example/" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
      customCss: ["./src/styles/custom.css"],
    }),
  ],
});
