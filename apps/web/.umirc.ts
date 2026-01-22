import { defineConfig } from "umi";
import path from "path";

export default defineConfig({
  styles: ['@/global.css'],
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
  ],

  npmClient: "pnpm",
  alias: {
    "@workspace/ui": path.resolve(__dirname, "../../packages/ui/src"),
    "@workspace/ui/components": path.resolve(
      __dirname,
      "../../packages/ui/src/components"
    ),
    "@workspace/ui/lib": path.resolve(__dirname, "../../packages/ui/src/lib"),
    "@workspace/ui/hooks": path.resolve(
      __dirname,
      "../../packages/ui/src/hooks"
    ),
  },
  extraPostCSSPlugins: [
    require('@tailwindcss/postcss'),
  ],
});
