var fs         = require('fs');
var pugify    = require('pugify');
var shortify   = require('shortify');
var uglifyify  = require('uglifyify');
var browserify = require('browserify');

module.exports = function(app) {

  var options = app.settings.engine.builder;

  app.configure('production', function() {
    // TODO: execute this only once
    // TODO: let this be safely done BEFORE handing requests
    var writer = createWriter(app, options);
    var builder = createBuilder(app, options);

    builder.bundle().pipe(writer);
  });

  app.configure('development', function() {
    app.get('/javascripts/build.js', function(req, res, next) {
      var writer = createWriter(app, options);
      var builder = createBuilder(app, options);

      builder.bundle().on('error', next)
        .pipe(writer.on('finish', next));
    });
  });

};

function createWriter(app, options) {
  return fs.createWriteStream(options.output);
}

function createBuilder(app, options) {
  var builder = browserify(options);

  app.configure(function() {
    builder.add(options.entry);
    builder.transform(shortify(options.aliases));
    builder.transform(pugify);
  });
  app.configure('production', function() {
    builder.transform({ global: true }, uglifyify);
  });

  return builder
}
