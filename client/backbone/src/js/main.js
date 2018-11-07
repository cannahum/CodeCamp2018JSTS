require.config({
  paths: {

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
