(function() {
  define(["application", "services/mainService"], function(application) {
    return application.service("someService", [
      "mainService", function(mainService) {
        console.log(mainService);
        return this.name = "Vlad";
      }
    ]);
  });

}).call(this);
