// var counterPromise = function () {

//     return new Promise (function (resolve, reject) {
//         setTimeout(function () {
//             var i = 0;
        
//             while (i < 10) {
//                 console.log(i);
//                 ++i;
//                 if(i === 6) {
//                     reject("Error: Don't finish on 6");
//                 }
//             }
//             resolve("Done");

//         }, 300)
//     });
// };

// counterPromise()
//     .then(function (value) {
//         console.log(value);
//     })
//     .catch(function(value) {
//         console.error(value);
//     });



// var promise = new Promise (function(resolve, reject) {
//     resolve ('Going on vacation');
// })
// promise
// .then(function(successMessage) {
//     console.log(successMessage);
// }, function(errorMessage) {
//     console.log(errorMessage);
// })




var promise = new Promise(function(resolve, reject) {
    reject('Sorry, you failed the test')
})
promise
.then(function(successMessage) {
    console.log(successMessage);
}, function (errorMessage) {
    console.log(errorMessage);
})


