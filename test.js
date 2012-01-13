var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(req, res) {
    var message = 'Heroku Test\n\n';
    message += '<code><pre>';
    message += require('util').inspect(process.versions, true, null);
    message += '</pre></code>';
    
    res.send(message);
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("Running on " + process.version);
    console.log("Listening on " + port);
});