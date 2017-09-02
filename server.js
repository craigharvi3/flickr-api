const express = require('express');
const routes = require('./app/server/routes');
const path = require('path');

// Start express
const app = express();

app.use(express.static(path.join(__dirname, '/public')));

routes(app);

app.set('port', process.env.PORT || 3001);

app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});

module.exports = app;
