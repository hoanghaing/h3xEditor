var express = require("express");
var app = express();

app.use(express.static(__dirname + '/public/'));
app.set("view engine", "ejs");
app.get("/", function (req, res){
    res.render('pages/index');
});

var port = process.argv[2] || 8888;
app.listen(port);
console.log("Listening to port: ", port);