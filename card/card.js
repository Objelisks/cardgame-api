let express = require('express');
let route = express.Router();

let generator = require('../generator/generator.js');

/*
supports

/cards/id

*/

route.param('card', (req, res, next, id) => {
   let card = generator.generate(id);
   if(card) {
       req.card = card;
   }
   next();
});

route.get('/:card', (req, res) => {
    if(req.card) {
        res.send({
            data: {
                id: req.card.id,
                type: 'card',
                attributes: req.card
            },
        });
    } else {
        res.send({
            errors: [{id: 404, title: 'card not found'}],
        });
    }
});

module.exports = route;