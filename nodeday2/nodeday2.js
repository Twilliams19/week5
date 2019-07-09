var readline = require("readline");

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

rl.question("Who are you?\n", function(answer) {
    rl.close();

    finished(answer);
});

function finished (value) {
    console.log("My name is:" + value);
    stopTimer();
    console.log("I am done for right now");
};

var i = 0;
var counter = setInterval(timer, 2000);
function timer () {
    console.log(i);
    ++i;
    if (i > 2000) {
        stopTimer();
    } else {
        counter;
    }
}

function stopTimer () {
    clearInterval(counter);
} 

