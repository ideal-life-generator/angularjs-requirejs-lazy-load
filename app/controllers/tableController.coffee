define [
  "application"
  "services/someService"
], (
  application
) ->

  application.controller "tableController", [
    "$scope", "table"
    , ($scope, table) ->
  
      $scope.title = table.data.title
  
      $scope.users = table.data.users

  ]