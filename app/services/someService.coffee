define [
  "application"
  "services/mainService"
], (
  application
) ->

  application.service "someService", [
    "mainService"
    , (mainService) ->

      console.log mainService

      @name = "Vlad"

  ]