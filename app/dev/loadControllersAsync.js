(function() {
  define(["app/application"], function(application) {
    return application.config([
      "$routeProvider", "$controllerProvider", function($routeProvider, $controllerProvider) {
        var superWhen;
        superWhen = $routeProvider.when;
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
                return true;
              }
              defer = $q.defer();
              require([route.controllerUrl], function(requiredController) {
                $controllerProvider.register(route.controller, requiredController);
                defer.resolve();
                return loaded = true;
              });
              return defer.promise;
            }
          ];
          return superWhen.call($routeProvider, path, route);
        };
      }
    ]);
  });

}).call(this);
