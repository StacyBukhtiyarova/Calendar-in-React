module.exports = {
  extends: [
    "airbnb-base",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],

  env: {
    es6: true,
    node: true,
    jest: true,
    browser: true,
  },

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  rules: {

  "prettier/prettier": ["error", {
    "endOfLine": "auto",
    "arrow-body-style": 0,
    "import/no-useless-path-segments": 0
   }],
   "import/extensions": 0,
    "no-console": 0,
    "no-alert": 0,
    "no-unused-vars": 0,
    "react/prop-types": 0,
    "import/no-unresolved": 0,
    "global-require": 0,
    "class-methods-use-this": 0,
    "import/no-extraneous-dependencies": 0,
    "arrow-body-style": 0,
    "prefer-arrow-callback": 1,
    "prefer-template": 0,
    "no-param-reassign":0
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: ['.js', '.jsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
    react: {
      version: 'detect',
    },
  },
}
