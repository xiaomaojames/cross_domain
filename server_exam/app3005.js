var express = require('express');
var app = express();

app.use(express.static('public'));

app.get("/",function(req,res){
    res.send("你没看错，就是这样的！！！");
});


app.get("/api1",function (req, res) {


    res.set('Access-Control-Allow-Origin', '*');
    res.send("I am api1,yahe5434!");
});


app.listen(3005);