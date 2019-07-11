var { rf } = require('./read.js');
var { wf } = require('./write.js');

var { userName, weatherQuestion } = require('./input.js');

var output = "";

userName()
    .then(function(userName) {
        output += userName;
    })
    .then(weatherQuestion)
    .then(function(answer) {
        output += ": " + answer + "\n";
    })
    .then(function () {
        wf(output);
    })
   