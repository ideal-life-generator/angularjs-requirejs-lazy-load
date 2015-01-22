(function() {
  define(["application"], function(application) {
    return application.service("mainService", function() {
      return this.name = "Vlad";
    });
  });

}).call(this);
