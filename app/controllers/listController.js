(function() {
  define(["app/application"], function(application) {
    return application.controller("listController", [
      "$scope", "list", function($scope, list) {
        $scope.title = list.data.title;
        return $scope.days = list.data.days;
      }
    ]);
  });

}).call(this);
