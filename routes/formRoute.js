const express = require('express');
const router = express.Router();
const messages = require('../models/messages');

router.get('/', (req, res) => {
    res.render('form', { title: 'Form' });
});

router.post('/', (req, res) => {    
    messages.push({ text: req.body.textMsg, user: req.body.username, added: new Date() });
    res.redirect("/");
});

module.exports = router;