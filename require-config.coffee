require.config
  baseUrl: "./app"

  paths:
    angular: "https://code.angularjs.org/1.3.9"

  shim:
    "angular/angular.min":
      exports: "angular"
    "angular/angular-route.min": [ "angular/angular.min" ]
    # "modules/amdLoader": [ "angular/angular.min" ]
    "application": [ "angular/angular-route.min" ]

require [
  "configs/routeConfig"
  # "services/someService"
], ->

  angular.element document
  .ready ->
    angular.bootstrap document, [ "application" ]