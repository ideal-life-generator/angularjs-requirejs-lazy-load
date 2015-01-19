(function() {
  require.config({
    paths: {
      angular: "https://code.angularjs.org/1.3.9",
      controllers: "app/controllers"
    },
    shim: {
      "angular/angular.min": {
        exports: "angular"
      },
      "angular/angular-route.min": ["angular/angular.min"]
    }
  });

  require(["app/application", "app/config", "controllers/tableController", "controllers/listController", "controllers/chartController"], function() {
    return angular.element(document).ready(function() {
      return angular.bootstrap(document, ["application"]);
    });
  });

}).call(this);
