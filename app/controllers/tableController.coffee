define [
  "app/application"
], (
  application
) ->

  tableController = ($scope, table) ->

    $scope.title = table.data.title

    $scope.users = table.data.users

  tableController.$inject = [ "$scope", "table" ]

  tableController