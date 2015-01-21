define [
  "app/application"
], (
  application
) ->

  listController = ($scope, list) ->

    $scope.title = list.data.title

    $scope.days = list.data.days

  listController.$inject = [ "$scope", "list" ]

  listController