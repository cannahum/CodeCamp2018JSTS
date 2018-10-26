define([
  // These are path alias that we configured in our bootstrap
  './Hello/Controller'
], function(Hello) {
  var hello = new Hello();

  hello.show();
});
