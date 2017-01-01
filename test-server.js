var chalk = require('chalk');
var path = require('path');
var express = require('express');
var port = 4000;
var env = process.env.BUILD_ENV;

var app = new express();

app.use(express.static(path.join(__dirname, `build/${env}`)));

app.use('/', (req, res) => {
	res.sendFile(path.join(__dirname, `build/${env}/index.html`));
});

app.listen(port, () => {
	console.log('RUNNING ON PORT: ' + port + ' | ' + chalk.bgRed(app.get('env')));
});
