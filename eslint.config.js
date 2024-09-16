import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import node from 'eslint-plugin-node';

export default [
  // Ignore dist folder
  { ignores: ['dist'] },
  
  // Frontend (React) configuration
  {
    files: ['**/*.{jsx,tsx}'], // Target frontend files
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },

  // Backend (Node.js) configuration
  {
    files: ['**/*.{js,ts}'], // Target backend files
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.node, // Add Node.js globals
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      node,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...node.configs.recommended.rules, // Apply recommended Node.js rules
      'node/no-unpublished-require': 'off', // Disable for using dev dependencies like Vite
      'node/no-missing-import': 'off', // Turn off if using ESModules in Node.js
    },
  },
];
