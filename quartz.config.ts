import { QuartzConfig } from "./quartz/cfg";
import * as Plugin from "./quartz/plugins";

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "huntsyea's",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "garden.huntyea.com",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "ui-sans-serif",
        body: "ui-sans-serif",
        code: "ui-monospace",
      },
      colors: {
        lightMode: {
          light: "#FDFDFFFF",
          lightgray: "#e5e7eb",
          gray: "#4b5563",
          darkgray: "#6b7280",
          dark: "#111827",
          secondary: "#4b5563",
          tertiary: "#006be6",
          highlight: "rgba(224, 239, 255, 0.94)",
        },
        darkMode: {
          light: "#202124",
          lightgray: "#e5e7eb",
          gray: "#4b5563",
          darkgray: "#6b7275",
          dark: "#e5e7eb",
          secondary: "#4b5563",
          tertiary: "#006be6",
          highlight: "rgba(224, 239, 255, .85)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
};

export default config;