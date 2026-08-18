/**
 * Minimal ESLint 9 flat config.
 * CRA/craco use their own bundled ESLint through the webpack plugin, so this
 * file exists mainly to satisfy standalone `eslint` invocations (e.g., editor
 * integrations, CI linters, deployment health checks) that expect a flat
 * config on ESLint 9.x.
 */
const reactHooks = require("eslint-plugin-react-hooks");
const globals = require("globals");

module.exports = [
  {
    files: ["src/**/*.{js,jsx,mjs,cjs}"],
    plugins: {
      "react-hooks": reactHooks,
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        process: "readonly",
      },
    },
    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
  },
  {
    // shadcn/ui components are copied in as-is; skip strict linting on them
    ignores: [
      "build/**",
      "node_modules/**",
      "src/components/ui/**",
      "scripts/**",
    ],
  },
];
