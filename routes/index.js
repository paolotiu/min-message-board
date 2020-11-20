var express = require('express');
var router = express.Router();
const TimeAgo = require('javascript-time-ago');
const en = require('javascript-time-ago/locale/en');
const Handlebars = require('hbs');
TimeAgo.addDefaultLocale(en);

// Create formatter (English).
const timeAgo = new TimeAgo('en-US');

Handlebars.registerHelper('timeAgo', function (time) {
    return timeAgo.format(time);
});

const messages = [
    {
        text: 'Hi there!',
        user: 'Amando',
        added: new Date(),
    },
    {
        text: 'Hello World!',
        user: 'Charles',
        added: new Date(),
    },
];
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Mini Message Board!', messages: messages });
});

module.exports = { router, messages };
