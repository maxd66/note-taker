const fs = require('fs');
const express = require('express');
const path = require('path');


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/htmlRoutes.js')
require('./routes/apiRoutes.js')

app.get('/api/notes', (req, res) => res.sendFile(path.join(__dirname, 'db/db.json')));

app.post('/api/notes', (req, res) => {
    const newTask = req.body

})

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));