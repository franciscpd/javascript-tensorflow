const path = require('path');

module.exports = {
  plugins: [],
  webpack: {
    alias: {
      '@shared': path.resolve(__dirname, 'src', 'shared'),
      '@services': path.resolve(__dirname, 'src', 'services'),
      '@components': path.resolve(__dirname, 'src', 'components'),
      '@view': path.resolve(__dirname, 'src', 'view'),
      '@config': path.resolve(__dirname, 'src', 'config'),
    },
  },
  jest: {
    configure: {
      moduleNameMapper: {
        '^@(.*)$': '<rootDir>/src$1',
      },
    },
  },
};
