const express = require('express');
var cors = require('cors')
const app = express();

var whitelist = ['http://localhost:8100', 'http://localhost:9000', 'http://localhost:8080', 'http://192.168.1.179:8000', 'http://192.168.1.179:8085'];
var corsOptions = {
origin: function(origin, callback){
var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
callback(null, originIsWhitelisted);
}
};

// middlewares
app.use(express.json(),cors(corsOptions));

app.use(express.urlencoded({extended: false}));

// Routes
app.use(require('./routes/index'));

app.listen(8000);
console.log('Server on port', 8000);