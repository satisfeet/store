var middleware = require('express-less');

module.exports = function(app) {

  var options = app.settings.engine.styles;

  // TODO: fix this hack in lib/config
  options.prefix = '/stylesheets';

  app.use('/stylesheets', middleware(options.src))

};
