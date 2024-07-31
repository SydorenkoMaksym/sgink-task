import withNuxt from './.nuxt/eslint.config.mjs'
// import { FlatCompat } from '@eslint/eslintrc';
// import { fixupConfigRules } from "@eslint/compat";
import js from '@eslint/js';
import vue from 'eslint-plugin-vue/lib/configs/flat/vue3-recommended.js';
// import tailwindcss from 'eslint-plugin-tailwindcss';

// const compat = new FlatCompat();

export default withNuxt([
  // ESLint recommended rules
  js.configs.recommended,
  // Vue 3 recommended rules
  ...vue,
  // Airbnb config for Vue NOT support new ESLint FlatConfig
  // ...fixupConfigRules(compat.extends( '@vue/eslint-config-airbnb')),
  // Uncomment the following lines if you are using Tailwind CSS
  {
    // plugins: { tailwindcss },
    // rules: tailwindcss.configs.recommended.rules,
  },
  {
    files: ['*.vue'],
    rules: {
      'vue/multi-word-component-names': 'error'
    }
  },
  {
    files: ['app.vue', 'error.vue', 'pages/**/*.vue', 'layouts/**/*.vue'],
    rules: {
      // disable the rule for these files
      'vue/multi-word-component-names': 'off'
    }
  }
]);
