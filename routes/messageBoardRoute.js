const express = require('express');
const router = express.Router();
const messages = require('../models/messages');

router.get('/', (req, res) => {
    const msgIndex = req.params.msgIndex; 
    res.render('messageBoard', { messages, title: 'Homepage',  msgIndex});
});
router.get('/:msgIndex', (req, res) => {
    const msgIndex = req.params.msgIndex; 
    res.render('messageBoard', { messages: [messages[msgIndex]], title: 'Homepage', msgIndex});
});

module.exports = router;