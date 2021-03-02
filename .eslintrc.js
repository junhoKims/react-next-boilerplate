const OFF = 0
const WARN = 1
const ERROR = 2

module.exports = {
  extends: [
    'standard',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
  ],
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'import', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    window: 'readonly',
  },
  env: {
    browser: true,
    es2021: true,
    es6: true,
  },
  rules: {
    'react/jsx-filename-extension': OFF,
    'react/jsx-one-expression-per-line': OFF,
    'react/jsx-uses-react': OFF,
    'react/jsx-uses-vars': OFF,
    'react/react-in-jsx-scope': OFF,
    'react/prop-types': OFF,
    'react/no-danger': OFF,
    'react/jsx-props-no-spreading': OFF,
    'import/prefer-default-export': OFF,
    'no-dupe-keys': OFF,
    'react-hooks/exhaustive-deps': WARN,
    'no-unused-vars': WARN,
    'no-undef': WARN,
    'prefer-destructuring': WARN,
    'no-console': [WARN, { allow: ['log', 'warn', 'error'] }],
    '@typescript-eslint/adjacent-overload-signatures': ERROR,
    'react-hooks/rules-of-hooks': ERROR,
    'quote-props': [ERROR, 'as-needed'],
    'no-underscore-dangle': [ERROR, { allow: ['_id'] }],
    'arrow-body-style': [
      ERROR,
      'as-needed',
      { requireReturnForObjectLiteral: true },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
