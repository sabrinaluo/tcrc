var _ = require('lodash');
var env = require('./env.json');
var nodeEnv = process.env.NODE_ENV || 'dev';

// put common config here; put env config into env.json
var config = {
  sessionSecret: 'tcrc',
  jwtSecret:'e7cf9334-193d-4144-92be-616f18ea9cfa' // random uuid4
};

_.assignIn(config, env[nodeEnv]);
module.exports = config;
