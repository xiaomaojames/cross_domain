var express = require('express');
var app = express();

app.use(express.static('public'));

app.get("/",function(req,res){
    res.send("你没看错，就是这样的！！！");
});

app.get("/jsonp",function (req, res) {
    res.send("callback('你没看错')");
});

app.get("/help_request_3004",function (request, respons) {


    var http = require('http');

    var qs = require('querystring');

    var data = {
        a: 123,
        time: new Date().getTime()};//这是需要提交的数据


    var content = qs.stringify(data);

    var options = {
        hostname: 'localhost',
        port: 3004,
        path: '/api1',
        method: 'GET'
    };

    var req = http.request(options, function (res) {
        console.log('STATUS: ' + res.statusCode);
        console.log('HEADERS: ' + JSON.stringify(res.headers));
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            console.log('BODY: ' + chunk);
            respons.send(chunk);
        });
    });

    req.on('error', function (e) {
        console.log('problem with request: ' + e.message);
    });

    req.end();




});



app.listen(3003);