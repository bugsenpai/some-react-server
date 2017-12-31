var express = require("express");

var app = express();

app.use(express.static('public'));

app.listen(process.env.PORT, process.env.HOST, function(){
    console.log('app listen on port 3000');
    console.error('error');
    console.log(__dirname);
    console.log(__filename);
})