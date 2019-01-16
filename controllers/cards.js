const Card = require('../models/card');

module.exports = (app) => {

    // INDEX
    app.get('/', (req, res) => {
       res.render('index', {});
    })

    // NEW
    app.get('/cards/new', (req, res) => {
        res.render('cards-new', {}); 
    })

    // CREATE
    app.post('/cards', (req, res) => {
        Card.create(req.body).then((card) => {
        console.log(card);
        res.redirect(`/cards/${card._id}`) 
        }).catch((err) => {
        console.log(err.message);
        })
    })

    // SHOW
    app.get('/cards/:id', (req, res) => {
        Card.findById(req.params.id).then((card) => {
        res.render('cards-show', { card: card })
        }).catch((err) => {
        console.log(err.message);
        })
    })

    // EDIT
    app.get('/cards/:id/edit', (req, res) => {
        Card.findById(req.params.id, function(err, card) {
        res.render('cards-edit', {card: card});
        })
    })

    // UPDATE
    app.put('/cards/:id', (req, res) => {
        Card.findByIdAndUpdate(req.params.id, req.body)
        .then(card => {
            res.redirect(`/cards/${card._id}`)
        })
        .catch(err => {
            console.log(err.message)
        })
    })

    // DELETE
    app.delete('/cards/:id', function (req, res) {
        console.log("DELETE card")
        Card.findByIdAndRemove(req.params.id).then((card) => {
        res.redirect('/');
        }).catch((err) => {
        console.log(err.message);
        })
    })

    // MISSING PEOPLE
    app.get('/mp', (req, res) => {
        Card.find()
        .then(cards => {
          res.render('mp', { cards: cards });
        })
        .catch(err => {
          console.log(err);
        })
    })

    // CONTACT
    app.get('/contact', (req, res) => {
        res.render('contact', {});
    })
}