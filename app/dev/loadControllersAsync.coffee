define [
  "app/application"
], (
  application
) ->

  application.config [
    "$routeProvider", "$controllerProvider"
    , ($routeProvider, $controllerProvider) ->

      superWhen = $routeProvider.when

      $routeProvider.when = (path, route) ->
        loaded = off
        route.resolve = new Object unless route.resolve
        route.resolve[route.controller] = [
          "$q",
          ($q) ->

            return on if loaded

            defer = $q.defer()
  
            require [
              route.controllerUrl
            ], (requiredController) ->
              $controllerProvider.register route.controller, requiredController
              defer.resolve()
              loaded = on
  
            defer.promise
        ]
        superWhen.call $routeProvider, path, route

  ]