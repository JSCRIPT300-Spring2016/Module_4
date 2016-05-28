module.exports = {
    "env": {
        "browser": true
    },
    "extends": "eslint:recommended",
    "rules": {
        "indent": [
            "error",
            2
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-undef": [
            "error"
        ],
        "no-unused-vars": [
            "error"
        ],
        "eqeqeq": [
            "error"
        ],
         "quotes": [
            "error",
            "single"
        ],
        "no-console": [
            "error"
        ],
        "comma-dangle": [
            "error"
        ],
        "max-len": [
            "error",
            80,
            2,
            {"ignoreUrls": true}
        ],
        "no-trailing-spaces": [
            "error"
        ],
        "object-curly-spacing": [
            "error",
            "always"
        ],
        "newline-before-return": [
            "error"
        ]
    }
};
