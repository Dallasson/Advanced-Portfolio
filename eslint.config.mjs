import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
    rules: {
      // ✅ turn off unescaped entities warning in JSX
      "react/no-unescaped-entities": "on",

      // ✅ allow unused imports/vars (if you don’t want warnings)
      "@typescript-eslint/no-unused-vars": "on",
    },
  },
];

export default eslintConfig;
