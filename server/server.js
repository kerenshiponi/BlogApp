var express = require('express');

var app = express();


app.use(function (req, res, next) {
  //  console.dir(req);
    next();
});

app.set('port', 8080);

app.use(express.static(__dirname + '/../'));


app.listen(app.get('port'), function () {
    console.log('Server is up listening on ' + app.get('port'));
});

