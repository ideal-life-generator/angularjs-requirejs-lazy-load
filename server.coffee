http = require "http"
express = require "express"

app = express()
server = http.Server app

app.use express.static __dirname

app.use "/", (req, res) ->
  res.sendFile "#{__dirname}/index.html"

server.listen 3000