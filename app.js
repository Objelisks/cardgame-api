let express = require('express');
let app = express();
let port = 8082;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://cardgame-objelisks.c9users.io');
    next();
});

// routers
let card = require('./card/card.js');
app.use('/cards', card);

app.listen(port, () => {
    console.log('api listening on', port);
});