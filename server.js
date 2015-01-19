(function() {
  var app, express, http, server;

  http = require("http");

  express = require("express");

  app = express();

  server = http.Server(app);

  app.use(express["static"](__dirname));

  app.use("/", function(req, res) {
    return res.sendFile("" + __dirname + "/index.html");
  });

  server.listen(3000);

}).call(this);
