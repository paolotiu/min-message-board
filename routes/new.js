const express = require('express');
var router = express.Router();
const messages = require('./index').messages;

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('form');
});

router.post('/', function (req, res, next) {
    const { messageText, username } = req.body;

    messages.push({
        text: messageText,
        user: username,
        added: Date.now(),
    });
    res.redirect('/');
});

module.exports = router;
