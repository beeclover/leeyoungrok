const path = require('path');

module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'themeprovider-storybook',
  ],
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@atom': path.resolve(__dirname, '../../app/src/components/atom/'),
      '@module': path.resolve(__dirname, '../../app/src/components/module/'),
      '@template': path.resolve(
        __dirname,
        '../../app/src/components/template/',
      ),
      '@style': path.resolve(__dirname, '../../app/src/style/'),
      '@hook': path.resolve(__dirname, '../../app/src/hook/'),
    };
    config.resolve.extensions.push('.js', '.jsx');
    return config;
  },
};
