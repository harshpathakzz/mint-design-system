import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import {
  noPrimitiveColorVariables,
  noRedeclareMintTokens,
  noRedeclareMintUtils
} from './eslint-rules/index.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: {
      mint: {
        rules: {
          'no-primitive-color-variables': noPrimitiveColorVariables,
          'no-redeclare-mint-tokens': noRedeclareMintTokens,
          'no-redeclare-mint-utils': noRedeclareMintUtils
        }
      }
    },
    rules: {
      "mint/no-primitive-color-variables": "error",
      "mint/no-redeclare-mint-tokens": "error",
      "mint/no-redeclare-mint-utils": "error"
    },
    ignores: [
      "**/node_modules/**",
      "**/public/**",
      "**/build/**",
      "**/.next/**",
      "**/eslint-rules/**",
      "**/stylelint-config/**"
    ]
  }
];

export default eslintConfig;
