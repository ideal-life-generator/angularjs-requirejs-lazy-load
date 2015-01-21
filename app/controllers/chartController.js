(function() {
  define(["app/application"], function(application) {
    var chartController;
    chartController = function($scope, chart) {
      $scope.title = chart.data.title;
      return $scope.message = chart.data.message;
    };
    chartController.$inject = ["$scope", "chart"];
    return chartController;
  });

}).call(this);
