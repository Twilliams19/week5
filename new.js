var events = require('events');
var { gameQuestion } = require('./game.js');

var eventEmitter = new events.EventEmitter();

// Event Listeners
eventEmitter.on('morning', sunHandler);
eventEmitter.on('night', function () {
    console.log("cant play games tonight");
});
eventEmitter.on('afternoon', function () {
    console.log("must find a game near the house");
});

// Handler Functions
function sunHandler () {
    console.log('Pick any game you want, any place you want');
}

function gameHandler(game) {
    switch(game) {
        case 'morning':
            eventEmitter.emit('morning');
            break;
        case 'night': 
            eventEmitter.emit('night');
            break;
        case 'afternoon':
            eventEmitter.emit('afternoon');
            break;
        default:
            console.log("Time day unspecified");
            break;
    }
}

gameQuestion()
    .then(function(value) {
        gameHandler(value);
    })
