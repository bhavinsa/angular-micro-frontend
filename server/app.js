var express = require('express');
var app = express();
var path = require('path');
app.use(express.static(path.join(__dirname, '../dist/common')));
app.use('/agent',express.static(path.join(__dirname, '../dist/agent')));
app.use('/customer',express.static(path.join(__dirname, '../dist/customer')));

app.listen(5000);
console.log('Listening on port 5000');