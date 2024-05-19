import globals from 'globals';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import customConfig from './eslint.config.json';

export default [
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginReactConfig,
  customConfig,
];
