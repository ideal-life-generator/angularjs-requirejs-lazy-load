(function() {
  define(function() {
    var application;
    application = angular.module("application", ["ngRoute"]);
    return application.config([
      "$provide", "$compileProvider", "$controllerProvider", "$routeProvider", function($provide, $compileProvider, $controllerProvider, $routeProvider) {
        var _when;
        application.controller = $controllerProvider.register;
        application.provider = $provide.provider;
        application.service = $provide.service;
        application.factory = $provide.factory;
        application.constant = $provide.constant;
        application.value = $provide.value;
        application.directive = function() {
          return $compileProvider.directive.apply(application, arguments);
        };
        _when = $routeProvider.when;
        return $routeProvider.when = function(path, route) {
          var loaded;
          loaded = false;
          if (!route.resolve) {
            route.resolve = new Object;
          }
          route.resolve[route.controller] = [
            "$q", function($q) {
              var defer;
              if (loaded) {
                return loaded;
              }
              defer = $q.defer();
              require([route.controllerUrl], function() {
                defer.resolve();
                return loaded = true;
              });
              return defer.promise;
            }
          ];
          return _when.call($routeProvider, path, route);
        };
      }
    ]);
  });

}).call(this);
