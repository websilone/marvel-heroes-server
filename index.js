var express = require('express');
var path = require('path');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
/* app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
    response.render('pages/index');
});

app.get('/cool', function(request, response) {
    response.send(cool());
}); */

app.use('static/', express.static(__dirname + '/public/static'));

app.use('*', function (req, res) {
    return res.sendFile(path.resolve(__dirname, 'public/index.html'));
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
