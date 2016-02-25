var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');

// set our port
var port = process.env.PORT || 80;

app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

require('./routes')(app); // configure our routes

app.listen(port);
console.log('Mental \'SPA\' running on port: \'' + port + '\'.');
console.log('To change this one can set environmental variable PORT. ');
console.log('(eg. Unix-> export PORT=1234, Win-> set PORT=1234)');
console.log('Aza.');

exports = module.exports = app;