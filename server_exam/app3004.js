var express = require('express');
var app = express();

app.use(express.static('public'));

app.get("/",function(req,res){
    res.send("你没看错，就是这样的！！！");
});

app.get("/jsonp",function (req, res) {
    res.send("callback('你没看错')");
});
app.get("/api1",function (req, res) {
    res.send("I am api1,yahe!");
});


app.listen(3004);