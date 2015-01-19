(function() {
  define(["app/application"], function(application) {
    return application.controller("tableController", [
      "$scope", "table", function($scope, table) {
        $scope.title = table.data.title;
        return $scope.users = table.data.users;
      }
    ]);
  });

}).call(this);
