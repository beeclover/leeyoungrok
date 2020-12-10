const path = require('path');

module.exports = {
  stories: [
    '../src/stories/**/*.stories.mdx',
    '../src/stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'themeprovider-storybook',
  ],
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@atom': path.resolve(__dirname, '../src/components/atom/'),
      '@module': path.resolve(__dirname, '../src/components/module/'),
      '@template': path.resolve(__dirname, '../src/components/template/'),
      '@style': path.resolve(__dirname, '../src/style/'),
      '@hook': path.resolve(__dirname, '../src/hook/'),
    };
    config.resolve.extensions.push('.js', '.jsx');
    return config;
  },
};
