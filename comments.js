// create web server
var express = require('express');
var app = express();
var fs = require("fs");

// create route for comment
app.get('/comment', function(req, res) {
    fs.readFile(__dirname + "/" + "comment.json", 'utf8', function(err, data) {
        console.log(data);
        res.end(data);
    });
});

// create route for adding comment
var comment = {
    "comment4": {
        "name": "Karan",
        "comment": "I like this article.",
        "date": "2016-11-16"
    }
};

app.post('/addComment', function(req, res) {
    fs.readFile(__dirname + "/" + "comment.json", 'utf8', function(err, data) {
        data = JSON.parse(data);
        data["comment4"] = comment["comment4"];
        console.log(data);
        res.end(JSON.stringify(data));
    });
});

// create server
var server = app.listen(8081, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port);
});