(function() {
  define(["application", "services/someService"], function(application) {
    return application.controller("tableController", [
      "$scope", "table", "someService", function($scope, table, someService) {
        $scope.title = table.data.title;
        return $scope.users = table.data.users;
      }
    ]);
  });

}).call(this);
