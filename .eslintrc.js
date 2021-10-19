module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["prettier", "react"],
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
      },
    },
  },
  rules: {
    "prettier/prettier": ["error"],
    "react/jsx-filename-extension": [
      "warn",
      {
        extensions: [".js", ".jsx"],
      },
    ],
    "no-unused-vars": "off",
    "no-param-reassign": "off",
    "no-console": "off",
    "no-use-before-define": "off",
    "no-nested-ternary": "off",
    "no-underscore-dangle": "off",
    "import/no-unresolved": "off",
    "no-constant-condition": "off",
    "global-require": "off",
    "react/no-array-index-key": "off",
    "react/no-unescaped-entities": "off",
    "react/destructuring-assignment": "off",
    "react/jsx-props-no-spreading": "off",
    "react/state-in-constructor": "off",
    "react/no-danger": "off",
    "react/prop-types": "off",
    "react/forbid-prop-types": "off",
    "react/require-default-props": "off",
    "react/default-props-match-prop-types": "off",
    "react/no-unused-prop-types": "off",
  },
};
