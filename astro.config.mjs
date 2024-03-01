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
        email: "mailto:simmons-tech@mit.edu",
      },
      editLink: {
        baseUrl:
          "https://github.com/dtemkin1/simmons-tech-docs/edit/main/docs/",
      },
      sidebar: [
        { label: "Intro to Simmons Tech", link: "/intro/" },
        { label: "Simmons Tech Transition", link: "/transition/" },
        {
          label: "How to do stuff",
          autogenerate: { directory: "guides" },
        },
        {
          label: "How does Simmons Tech work?",
          autogenerate: { directory: "reference" },
        },
      ],
      customCss: ["./src/styles/custom.css"],
    }),
  ],
  site: "https://dtemkin1.github.io",
  base: "/simmons-tech-docs",
  trailingSlash: "always",
});
