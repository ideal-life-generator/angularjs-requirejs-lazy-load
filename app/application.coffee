define ->

  application = angular.module "application", [ "ngRoute" ]

  application.config [
    "$provide", "$compileProvider", "$controllerProvider", "$routeProvider"
    , ($provide, $compileProvider, $controllerProvider, $routeProvider) ->
    
      application.controller = $controllerProvider.register
      application.provider = $provide.provider
      application.service = $provide.service
      application.factory = $provide.factory
      application.constant = $provide.constant
      application.value = $provide.value
      application.directive = -> $compileProvider.directive.apply application, arguments
  
      _when = $routeProvider.when
  
      $routeProvider.when = (path, route) ->
        loaded = off
        route.resolve = new Object unless route.resolve
        route.resolve[route.controller] = [
          "$q",
          ($q) ->
  
            return loaded if loaded
  
            defer = $q.defer()
    
            require [
              route.controllerUrl
            ], ->
              defer.resolve()
              loaded = on
    
            defer.promise
        ]

        _when.call $routeProvider, path, route
  ]