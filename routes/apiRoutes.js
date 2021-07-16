const fs = require('fs');
const path = require('path');
const Store = require('../db/index');

const notes = new Store('db');

module.exports = function (app) {

    app.get('/api/notes', (req, res) => {
        notes
        .getAll()
        .then((data) => {
            res.json(data);
        })
        .catch(err => {
            console.log(err);
            return res.status(500).end();
        });
    });

    app.post('/api/notes', (req, res) => {
        const newNote = req.body;

        notes
        .push(newNote)
        .then(notes.getAll()
        .then((data) => res.json(data))
        .catch(err => {
            console.log(err);
            return res.status(500).end();
        })
        )
    })

}