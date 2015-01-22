(function() {
  define(["application"], function(application) {
    return application.service("someDirective", function() {
      return this.name = "Vlad";
    });
  });

}).call(this);
