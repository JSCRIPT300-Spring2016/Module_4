module.exports = {
	"globals": {
		"google": true,
		"result": true,
		"round": true
	},	
    "env": {
        "browser": true,
		"jquery": true,
		"node": true
    },
    "extends": "eslint:recommended",
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "single",
			"avoid-escape"
        ],
        "semi": [
            "error",
            "always"
        ],
		"comma-dangle": [
			"error", 
			"never"
		],
		"no-undef": [
			"error"
		],
		"no-unused-vars": [
			"error"
		],
		"max-len": [
			"error", 
			80, 
			2,
			{"ignoreUrls": true}
		],
		"no-trailing-spaces": [
			"error", 
			{ "skipBlankLines": true }
		],
		"no-console": [
			"error"
		],
		"eqeqeq": [
			"error", 
			"allow-null"
		],
		"newline-before-return": [
			"error"
		],
		"object-curly-spacing": [
			"error", 
			"always"
		],
		"semi": [
			"error", 
			"always"
		]
    }
};