define [
  "application"
], (
  application
) ->
  
  application.controller "listController", [
    "$scope", "list"
    , ($scope, list) ->
  
      $scope.title = list.data.title
  
      $scope.days = list.data.days

  ]