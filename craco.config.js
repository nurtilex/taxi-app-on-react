const path = require('path');

const resolvePath = (p) => path.resolve(__dirname, p);

module.exports = {
  // ...
  webpack: {
    alias: {
      '@src': resolvePath('./src'),
      '@components': resolvePath('./src/components'),
      '@assets': resolvePath('./src/assets'),
      '@store': resolvePath('./src/store'),
      '@pages': resolvePath('./src/pages'),
      '@helper': resolvePath('./src/services/helper'),
      '@hoc': resolvePath('./src/services/hoc'),
      '@api': resolvePath('./src/services/api'),
    },
  },
  style: {
    sass: {
      loaderOptions: {
        // Prefer 'sass' (dart-sass) over 'node-sass' if both packages are installed.
        implementation: require('sass'),
        // Workaround for this bug: https://github.com/webpack-contrib/sass-loader/issues/804
        webpackImporter: false,
      },
    },
  },
  jest: {
    configure: {
      globals: {
        CONFIG: true,
      },
    },
  },
  // ...
};
