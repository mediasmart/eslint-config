module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb/base",
  "globals": {
    "atom": true,
    "before": true,
    "describe": true,
    "it": true,
    "settings": true
  },
  "env": {
    "node": true
  },
  "plugins": [
    "json"
  ],
  "rules": {
    "camelcase": "off",
    "consistent-return": "off",
    "complexity": ["error", 10],
    "global-require": "off",
    "eqeqeq": "warn",
    "max-len": [1, 120, { "tabWidth": 2, "ignoreComments": true }],
    "max-lines": ["error", 350],
    "no-await-in-loop": "off",
    "no-cond-assign": "off",
    "no-continue": "off",
    "no-multiple-empty-lines": ["error", { "max": 1 }],
    "no-restricted-syntax": "off",
    "no-return-assign": ["error", "except-parens"],
    "no-param-reassign": "off",
    "no-plusplus": "off",
    "no-underscore-dangle": "off",
    "import/no-dynamic-require": "off",
    "import/no-extraneous-dependencies": ["error", { "devDependencies": true }],
    "import/prefer-default-export": "off",
    "radix": "off",
    "sort-keys": "warn",
    "space-before-function-paren": ["error", { "anonymous": "always", "named": "always" }],
    "guard-for-in": "off"
  }
}
