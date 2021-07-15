const fs = require('fs');
const express = require('express');
const path = require('path');


const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'public/notes.html')));

app.get('/assets/css/styles.css', (req, res) => res.sendFile(path.join(__dirname, 'public/assets/css/styles.css')));

app.get('/assets/js/index.js', (req, res) => res.sendFile(path.join(__dirname, 'public/assets/js/index.js')));

app.get('/api/notes', (req, res) => res.sendFile(path.join(__dirname, 'db/db.json')));

app.post('/api/notes', (req, res) => {
    const newTask = req.body
    
})

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));