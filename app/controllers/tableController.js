(function() {
  define(["app/application"], function(application) {
    var tableController;
    tableController = function($scope, table) {
      $scope.title = table.data.title;
      return $scope.users = table.data.users;
    };
    tableController.$inject = ["$scope", "table"];
    return tableController;
  });

}).call(this);
