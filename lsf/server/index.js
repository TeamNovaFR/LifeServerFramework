const express       = require('express');
const bodyParser    = require('body-parser');
const axios         = require('axios');
const config        = require('../../config.json');
const io            = require('socket.io');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(config.frameworkPort, () => {
    console.log(`[LSF] Life Server Framework listening to port ${config.frameworkPort}`);
});