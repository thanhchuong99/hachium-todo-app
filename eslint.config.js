import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      'plugin:prettier/recommended',
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        tabWidth: 2,
        arrowParens: 'avoid',
        useTabs: false,
        semi: true,
        trailingComma: 'all',
        endOfLine: 'auto',
      },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variableLike',
        format: ['snake_case', 'camelCase', 'PascalCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'import',
        format: ['camelCase', 'PascalCase'],
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
    ],
  },
);
