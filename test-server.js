var path = require('path');
var express = require('express');
var https = require('https');
var http = require('http');
var fs = require('fs');

var DIST_DIR = path.join(__dirname, './build');
var host = '192.168.100.5';

// Create a service (the app object is just a callback).
var app = express();

//Serving the files on the dist folder
app.use(express.static(DIST_DIR));

//Send index.html when the user access the web
app.get('*', function(req, res) {
  res.sendFile(path.join(DIST_DIR, 'index.html'));
});

// Create an HTTP service.
http.createServer(app).listen(8000);

console.log('http server running at http://' + host + ':8000');

// generate certificates
// 1) install openssl
// 2) run command - openssl req -x509 -newkey rsa:2048 -keyout key.pem -out cert.pem -days 3001
// 3) remember passphase and update current file
// 4) get files where call command
// PS: for correct create files set country short name
