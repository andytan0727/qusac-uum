module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    project: "./tsconfig.json",
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
  },
  plugins: ["@typescript-eslint", "react", "react-hooks"],
  rules: {
    // ===============================================
    // TypeScript related
    // ===============================================
    "@typescript-eslint/explicit-function-return-type": "off",
    // Adding I to interfaces to stay consistent
    // with the convention of other languages (C#, Java, etc.)
    // despite it is perceived as an anti-pattern in TypeScript
    "@typescript-eslint/interface-name-prefix": ["error", "always"],
    "@typescript-eslint/array-type": ["error", "array-simple"],

    // ===============================================
    // React + hooks
    // ===============================================
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",

    // ===============================================
    // General
    // ===============================================
    "no-console": "off",
  },
  overrides: [
    // Override some TypeScript rules just for .js files
    {
      files: ["*.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off", //
      },
    },
  ],
};
