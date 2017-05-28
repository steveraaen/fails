var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var FailsSchema = new Schema({
	SETTLEMENT_DATE: Number,
    CUSIP: String,
    SYMBOL: String,
    FAILS: Number,
    DESCRIPTION: String,
    PRICE: Number
});

var Fails = mongoose.model("Fails", FailsSchema);

module.exports = Fails;
