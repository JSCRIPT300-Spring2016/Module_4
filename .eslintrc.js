module.exports = {
    'env': {
        'browser': true,
        'node': true
    },
    'globals': {
      'module': true,
      'require': true,
      'Set()': true
    },

    'extends': 'eslint:recommended',
    'rules': {
        'indent': [
            2,
            2
        ],
        'linebreak-style': [
            2,
            'unix'
        ],
        'quotes': [
            2,
            'single'
        ],
        'semi': [
            2,
            'always'
        ],
        'no-undef': [
            2
        ],
        'no-unused-vars': [
            2
        ],
        'eqeqeq': [
            2
        ],
        'no-console': [
          2
        ],
        'comma-dangle': [
          2,
          'never'
        ],
        'max-len': [
          2,
          80,
          2,
          {'ignoreUrls': true}
        ],
        'no-trailing-spaces': [
          2
        ],
        'object-curly-spacing': [
          2,
          'always'
        ],
        'newline-before-return': [
          2
        ]


    }
};
