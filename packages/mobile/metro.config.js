/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const path = require('path');

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    extraNodeModules: new Proxy(
      {},
      {
        get: (target, module) => {
          return path.join(__dirname, `./node_modules/${module}`);
        },
      },
    ),
  },
  watchFolders: [path.resolve(__dirname, '..')],
};
