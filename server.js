const express = require('express');

const app = express();

function delay(duration) {
    const startTime = Date.now();
    while (Date.now() - startTime < duration) {
        // event loop is blocked....
    }
}

app.get('/', (req, res) => {
    return res.send('Performance Example');
})

app.get('/timer', (req, res) => {
    delay(10000);
    return res.send('Ding ding ding!!!!!!!!!!!')
})

app.listen(3000);