define [
  "app/application"
], (
  application
) ->

  chartController = ($scope, chart) ->

    $scope.title = chart.data.title

    $scope.message = chart.data.message

  chartController.$inject = [ "$scope", "chart" ]

  chartController