(function() {
  define(["app/application"], function(application) {
    return application.config([
      "$routeProvider", function($routeProvider) {
        return $routeProvider.when("/table", {
          templateUrl: "views/table.html",
          controller: "tableController",
          resolve: {
            table: function($http) {
              return $http.get("app/data/table.json");
            }
          }
        }).when("/chart", {
          templateUrl: "views/chart.html",
          controller: "chartController",
          resolve: {
            chart: function($http) {
              return $http.get("app/data/chart.json");
            }
          }
        }).when("/list", {
          templateUrl: "views/list.html",
          controller: "listController",
          resolve: {
            list: function($http) {
              return $http.get("app/data/list.json");
            }
          }
        }).otherwise({
          redirectTo: "/table"
        });
      }
    ]);
  });

}).call(this);
