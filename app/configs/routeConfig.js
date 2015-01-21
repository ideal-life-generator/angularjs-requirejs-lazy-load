(function() {
  define(["app/application"], function(application) {
    return application.config([
      "$routeProvider", function($routeProvider) {
        return $routeProvider.when("/table", {
          templateUrl: "views/table.html",
          controller: "tableController",
          controllerUrl: "controllers/tableController",
          resolve: {
            table: function($http) {
              return $http({
                type: "GET",
                url: "app/data/table.json"
              });
            }
          }
        }).when("/chart", {
          templateUrl: "views/chart.html",
          controller: "chartController",
          controllerUrl: "controllers/chartController",
          resolve: {
            chart: function($http) {
              return $http({
                type: "GET",
                url: "app/data/chart.json"
              });
            }
          }
        }).when("/list", {
          templateUrl: "views/list.html",
          controller: "listController",
          controllerUrl: "controllers/listController",
          resolve: {
            list: function($http) {
              return $http({
                type: "GET",
                url: "app/data/list.json"
              });
            }
          }
        }).otherwise({
          redirectTo: "/table"
        });
      }
    ]);
  });

}).call(this);
