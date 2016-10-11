let express = require('express');
let app = express();
let port = 8082;

// routers
let card = require('./card/card.js');

app.use('/cards', card);

app.listen(port, () => {
    console.log('api listening on', port);
});