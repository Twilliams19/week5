var readline = require("readline");

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

exports.gameQuestion = function () {

        return (new Promise(function (resolve, reject) {
            rl.question("What is the time of day?\n", function(answer) {
                rl.close();
            resolve(answer);
        });
    }));
}
