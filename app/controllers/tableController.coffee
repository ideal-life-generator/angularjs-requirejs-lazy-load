define [
  "application"
  "services/someService"
], (
  application
) ->

  application.controller "tableController", [
    "$scope", "table", "someService"
    , ($scope, table, someService) ->
  
      $scope.title = table.data.title
  
      $scope.users = table.data.users

  ]