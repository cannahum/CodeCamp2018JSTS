require.config({
  packages: [
    {
      name: 'card-validator',
      location: './lib/card-validator/',  // default 'packagename'
      main: 'index'                // default 'main'
    }
  ],
  paths: {
    jquery: '/node_modules/jquery/dist/jquery.min',
    underscore: '/node_modules/underscore/underscore-min',
    backbone: '/node_modules/backbone/backbone-min',
    text: '/node_modules/text/text',
    'credit-card-type': '/node_modules/credit-card-type/dist/js/app.built'
  },
});

require([
  // Load our app module and pass it to our definition function
  './app',
], function(App) {
  // The "app" dependency is passed in as "App"
  // App.initialize();
});
