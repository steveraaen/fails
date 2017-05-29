var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var pwd = require("./pwds");
var Fails = require("./models/Fails");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static("./public"));

mongoose.connect(pwd.mong);
var db = mongoose.connection;
db.on("error", function(err) {
    console.log("Mongoose Error: ", err);
});
db.once("open", function() {
    console.log("Mongoose connection successful.");
});
app.get("/data", function(req, res){
	Fails.find({ "SYMBOL": "OPVS"}, "SETTLEMENT_DATE SYMBOL FAILS", function(err, company){
		if (err) return handleError(err)
			console.log(company)
	})
	res.json("/data")
})

app.listen(PORT, function(){
	console.log("connected on port", PORT)
})











