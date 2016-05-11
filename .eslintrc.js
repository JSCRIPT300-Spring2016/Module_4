module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "rules": {
       "indent": ["error", 2],
        "linebreak-style": ["error", "unix"],
        "semi": ["error", "always"],
        "semi-spacing": "error",
        "no-unused-vars": ["error", { "vars": "local" }],
         "strict": [
            "error",
            "global"
        ],
        "quotes": ["error", "single"],
        "no-console":"error",
        "comma-dangle": [
            "error",
            "never"
        ],
        "no-trailing-spaces": "error",
        "object-curly-spacing": [
            "error",
            "always"
        ],
        "newline-before-return": [
            "error"
        ]
    }
};
