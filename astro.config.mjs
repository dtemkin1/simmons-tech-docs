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
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/simmons-tech' },
        { icon: 'email', label: 'Email', href: 'https://astro.build/chat' },
      ],
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
      favicon: "/favicon.png",
    }),
  ],
  site: "https://dtemkin1.github.io",
  base: "/simmons-tech-docs",
  trailingSlash: "always",
});
