var { history } = require('./history.js');
var { phone } = require("./phone.js");
var { notFound } = require("./404(1)");



var Taylor = "good"; //change between bad and good

console.log("This is a greeting to everyone reading this. Have yourself a great day");

if(Taylor === "good") {
 console.log(history());

} else if(Taylor === "bad") {
 console.log(phone());

} else {
    console.log(notFound);
}
