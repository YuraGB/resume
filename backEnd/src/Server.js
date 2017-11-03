const express = require('express');
const path = require('path');
const app = express();
const dbWork = require('../db/apiDB').getWork;
const dbHeader = require('../db/apiDB').getPhoto;
const dbHobbies = require('../db/apiDB').getHobbies;
const dbAbMe = require('../db/apiDB').dbAboutMe;


app.use(express.static(path.join(__dirname, '../../frontEnd/dist/')));
app.use(express.static(path.join(__dirname, '../../frontEnd/')));

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../../frontEnd/index.html'));
});

app.get('/work', (req, res, next) => {
    res.json(dbWork());
});

app.get('/photo', (req, res, next) => {
    res.json(dbHeader());
});

app.get('/hobbies', (req, res, next) => {
    res.json(dbHobbies());
});

app.get('/aboutMe', (req, res, next) => {
    res.json(dbAbMe());
});

app.listen(8800);