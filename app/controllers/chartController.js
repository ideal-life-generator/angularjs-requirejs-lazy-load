(function() {
  define(["app/application"], function(application) {
    return application.controller("chartController", [
      "$scope", "chart", function($scope, chart) {
        $scope.title = chart.data.title;
        return $scope.message = chart.data.message;
      }
    ]);
  });

}).call(this);
