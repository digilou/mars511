const express = require('express'),
      http = require('http'),
      app = express(),
      index = require('./public/index.html');

// configure app to use client directory for static pages
app.use(express.static(__dirname + '/client'));

// create server
http.createServer(app).listen(8000);

// set up routes
app.get('/', function (req, res) {
  res.render()
})
