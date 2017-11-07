const express = require('express');
const path = require('path');
const app = express();
const dbWork = require('../db/apiDB').getWork;
const dbHeader = require('../db/apiDB').getPhoto;
const dbHobbies = require('../db/apiDB').getHobbies;
const dbAbMe = require('../db/apiDB').dbAboutMe;
const intel = require('../logger/logger').intel;

let visitors ={
    hobbies: 0,
    work: 0,
    abMe: 0
};


app.use(express.static(path.join(__dirname, '../../frontEnd/dist/')));
app.use(express.static(path.join(__dirname, '../../frontEnd/')));

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../../frontEnd/index.html'));
});

app.get('/work', (req, res, next) => {

    intel.getLogger('info').info('request to work', visitors.work++);
    res.json(dbWork());
});

app.get('/photo', (req, res, next) => {
    res.json(dbHeader());
});

app.get('/hobbies', (req, res, next) => {
    intel.getLogger('info').info('request to hobbies', visitors.hobbies++);
    res.json(dbHobbies());
});

app.get('/aboutMe', (req, res, next) => {
    intel.getLogger('info').info('request to abMe', visitors.abMe++);
    res.json(dbAbMe());
});

app.use( (err, req, res, next )=> {

    intel.getLogger('errors').error("server error", err);
    res.send(err);
});

app.listen(8800);