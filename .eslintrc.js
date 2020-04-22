module.exports = {
  "env": {
    "browser": true,
    "es6": true,
  },
  "extends": "airbnb",
  "plugins": [
    "react",
  ],
  "globals": {
    "graphql": false,
  },
  "rules": {
    // Indent with 4 spaces
    "indent": [2, 4, {"SwitchCase": 1}],

    // Indent JSX with 4 spaces
    "react/jsx-indent": ["error", 4],

    // Indent props with 4 spaces
    "react/jsx-indent-props": ["error", 4],

    "react/forbid-prop-types": 0,

    "react/jsx-props-no-spreading": 0,

    "import/prefer-default-export": 0,

    "react/jsx-one-expression-per-line": 0,

    "no-return-assign": 0,

    "max-len": ["error", {"code": 150}],

    "react/prop-types": [2, {"ignore": ["store", "mainState", "globalState", "actions", "children"]}],

    "no-nested-ternary": 0

  },
  "parserOptions": {
    "sourceType": "module",
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true,
    },
  }
}