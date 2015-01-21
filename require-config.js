(function() {
  require.config({
    paths: {
      angular: "https://code.angularjs.org/1.3.9",
      configs: "app/configs",
      controllers: "app/controllers",
      dev: "app/dev"
    },
    shim: {
      "angular/angular.min": {
        exports: "angular"
      },
      "angular/angular-route.min": ["angular/angular.min"],
      "configs/routeConfig": ["dev/loadControllersAsync"]
    }
  });

  require(["app/application", "configs/routeConfig"], function() {
    return angular.element(document).ready(function() {
      return angular.bootstrap(document, ["application"]);
    });
  });

}).call(this);
