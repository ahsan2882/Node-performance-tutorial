const express = require('express');

const app = express();

function delay(duration) {
    const startTime = Date.now();
    //example of blocking function
    while (Date.now() - startTime < duration) {
        // event loop is blocked....
    }


    // real life examples are:
    // JSON.stringify({}) => "{}" for large objects
    // JSON.parse("{}") => {} for large objects
    // sorting large arrays
    // crypto module methods

}

app.get('/', (req, res) => {
    res.send(`Performance Example: ${process.pid}`);
})

app.get('/timer', (req, res) => {
    delay(10000);
    res.send(`Ding ding ding!!!!!!!!!!! : ${process.pid}`)
})
console.log('Running server.js')

console.log(`Worker ${process.pid} started`);
app.listen(3000);
