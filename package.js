Package.describe({
  name: 'd3k4y:minifier-js',
  summary: "JavaScript minifier",
  version: "2.1.1"
});

Npm.depends({
  "source-map": "0.5.6",
  "uglify-es": "3.0.18",
});

Package.onUse(function (api) {
  api.use('babel-compiler@7.3.4');
  api.export(['meteorJsMinify']);
  api.addFiles(['minifier.js'], 'server');
});
