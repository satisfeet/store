var pug = require('pug');

module.exports = function(app) {

  var options = app.settings.engine.views;

  app.configure(function() {
    app.set('views', options.path);
    app.set('view engine', options.engine);
    app.set('view options', options.locals);

    app.engine('pug', pug.renderFile);
  });

};
