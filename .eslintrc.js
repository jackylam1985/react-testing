module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    'ecmaFeatures': {
      'jsx': true
    },
  },
  extends: [
    'plugin:lodash/recommended',
    'plugin:react/recommended',
    'standard',
  ],
  plugins: [
    'react',
    'lodash',
    'html',
  ],
  // Custom rules
  rules: {
    // Always add comma dangle for multi line
    'comma-dangle': ['warn', 'always-multiline'],
    // Prefer to use const if never reassigned. If any variables in destructuring should be const. See https://eslint.org/docs/rules/prefer-const
    'prefer-const': ['error', {
      'destructuring': 'any',
      'ignoreReadBeforeAssign': false,
    }],
    // don't allow var, use let and const instead
    'no-var': 1,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
  },
}
