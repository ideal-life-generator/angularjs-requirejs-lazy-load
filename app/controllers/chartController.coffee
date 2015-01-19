define [
  "app/application"
], (
  application
) ->

  application.controller "chartController", [
    "$scope", "chart"
    , ($scope, chart) ->

      $scope.title = chart.data.title

      $scope.message = chart.data.message

  ]