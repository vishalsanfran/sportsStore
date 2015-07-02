var connect = require('connect'),
	serveStatic = require('serve-static');

var app = connect(); 
app.use(
    serveStatic("../angularJS")
 
).listen(5000);