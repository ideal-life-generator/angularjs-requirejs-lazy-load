(function() {
  define(["app/application"], function(application) {
    var listController;
    listController = function($scope, list) {
      $scope.title = list.data.title;
      return $scope.days = list.data.days;
    };
    listController.$inject = ["$scope", "list"];
    return listController;
  });

}).call(this);
