var tests = [];
for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    if (/Spec\.js$/.test(file)) {
      tests.push(file);
    }
  }
}

requirejs.config({
  // Karma serves files from '/base'
  baseUrl: '/base',

  paths: {
    'jquery': 'bower_components/jquery/dist/jquery',
    'jasmine-jquery': 'bower_components/jasmine-jquery/lib/jasmine-jquery',
    'underscore': 'bower_components/underscore/underscore',
    'backbone': 'bower_components/backbone/backbone',
    'hbs': 'bower_components/require-handlebars-plugin/hbs'
  },

  shim: {
    'underscore': {
      exports: '_'
    },
    'jasmine-jquery': {
      deps: ['jquery']
    }
  },

  // ask Require.js to load these files (all our tests)
  deps: tests,

  // start test run, once Require.js is done
  callback: window.__karma__.start
});
