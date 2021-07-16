const fs = require('fs');
const path = require('path');
const Store = require('../db/store');
const uniqid = require('uniqid')

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

        newNote.id = uniqid.process();

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

    app.delete('/api/notes/:id', (req, res) => {
        const deleteNote = req.params.id;
        fs.readFile('./db/db.json', 'utf-8', (err, data) => {
            if(err) {
                console.log(err);
                return
            }
            const noteArr = JSON.parse(data);
            for (const object of noteArr) {
                if(object.id == deleteNote) {
                    const index = noteArr.indexOf(object);
                    noteArr.splice(index, 1);
                    notes.write(noteArr);
                }
            }
        });
        notes.getAll().then((data) => {
            res.json(data)
        })
    })

}