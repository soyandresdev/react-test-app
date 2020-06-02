const cracoConfig = require('../craco.config.js');

module.exports = {
  resolve: {
    alias: {
      ...cracoConfig.webpack.alias,
    },
  },
};
