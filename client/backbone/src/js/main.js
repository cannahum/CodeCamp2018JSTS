require.config({
  packages: [
    {
      name: 'card-validator',
      location: './lib/card-validator/',  // default 'packagename'
      main: 'index'                // default 'main'
    }
  ],
  paths: {
    jquery: '../jquery/dist/jquery.min',
    underscore: '../underscore/underscore-min',
    backbone: '../backbone/backbone-min',
    text: '../text/text',
    'credit-card-type': '../credit-card-type/dist/js/app.built'
  },
  config: {
    text: {
      useXhr: function (url, protocol, hostname, port) {
        return true;
      }
    },
  }
});

require([
  // Load our app module and pass it to our definition function
  './app',
], function(App) {
  // The "app" dependency is passed in as "App"
  // App.initialize();
});
