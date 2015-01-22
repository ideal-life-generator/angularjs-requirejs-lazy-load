(function() {
  require.config({
    baseUrl: "./app",
    paths: {
      angular: "https://code.angularjs.org/1.3.9"
    },
    shim: {
      "angular/angular.min": {
        exports: "angular"
      },
      "angular/angular-route.min": ["angular/angular.min"],
      "application": ["angular/angular-route.min"]
    }
  });

  require(["configs/routeConfig"], function() {
    return angular.element(document).ready(function() {
      return angular.bootstrap(document, ["application"]);
    });
  });

}).call(this);
