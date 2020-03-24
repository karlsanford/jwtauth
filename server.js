require('dotenv').config()

const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');

let users = [];

app.use(express.json())

app.use(express.static(__dirname + '/public'));

app.post('/signup', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    console.log(req.body)
    res.send('post to signup');
})

app.post('/login', (req, res) => {
    res.send('post to login');
})

app.listen('3000', () => {console.log('listening on 3000')});