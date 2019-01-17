const Party = require('../models/party');

module.exports = (app) => {

    // SEARCH PARTIES
    app.get('/sp', (req, res) => {
        Party.find()
        .then(parties => {
          res.render('sp', { parties: parties});
        })
        .catch(err => {
          console.log(err);
        })
    })

    // NEW
    app.get('/parties/new', (req, res) => {
        res.render('parties-new', {}); 
    })

    // CREATE
    app.post('/parties', (req, res) => {
        Party.create(req.body).then((party) => {
        console.log(party);
        res.redirect(`/parties/${party._id}`) 
        }).catch((err) => {
        console.log(err.message);
        })
    })

    // SHOW
    app.get('/parties/:id', (req, res) => {
        Party.findById(req.params.id).then((party) => {
        res.render('parties-show', { party: party })
        }).catch((err) => {
        console.log(err.message);
        })
    })

    // EDIT
    app.get('/parties/:id/edit', (req, res) => {
        Party.findById(req.params.id, function(err, party) {
        res.render('parties-edit', {party: party});
        })
    })

    // UPDATE
    app.put('/parties/:id', (req, res) => {
        Party.findByIdAndUpdate(req.params.id, req.body)
        .then(party => {
            res.redirect(`/parties/${party._id}`)
        })
        .catch(err => {
            console.log(err.message)
        })
    })

    // DELETE
    app.delete('/parties/:id', function (req, res) {
        console.log("DELETE card")
        Party.findByIdAndRemove(req.params.id).then((party) => {
        res.redirect('/sp');
        }).catch((err) => {
        console.log(err.message);
        })
    })

}