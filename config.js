var _ = require('lodash');
var env = require('./env.json');
var nodeEnv = process.env.NODE_ENV || 'dev';

// put common config here; put env config into env.json
var config = {
  sessionSecret: 'tcrc'
};

_.assignIn(config, env[nodeEnv]);
module.exports = config;
