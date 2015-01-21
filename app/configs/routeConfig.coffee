define [
  "app/application"
], (
  application
) ->

  application.config [
    "$routeProvider"
    , ($routeProvider) ->
  
      $routeProvider
  
        .when "/table",
          templateUrl: "views/table.html"
          controller: "tableController"
          controllerUrl: "controllers/tableController"
          resolve:
            table: ($http) ->
              $http
                type: "GET"
                url: "app/data/table.json"
  
        .when "/chart",
          templateUrl: "views/chart.html"
          controller: "chartController"
          controllerUrl: "controllers/chartController"
          resolve:
            chart: ($http) ->
              $http
                type: "GET"
                url: "app/data/chart.json"
  
        .when "/list",
          templateUrl: "views/list.html"
          controller: "listController"
          controllerUrl: "controllers/listController"
          resolve:
            list: ($http) ->
              $http
                type: "GET"
                url: "app/data/list.json"
  
        .otherwise
          redirectTo: "/table"

  ]