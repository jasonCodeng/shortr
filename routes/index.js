var express = require('express');
var router = express.Router();
var shortid = require('shortid');
var redir = require('../models/redir');

const createHash = require('../hash');
const hashLength = 8;
const baseUrl = process.env.BASE_URL || 'http://localhost:3000';

router.get('/', function (req, res) {
    res.render('index');
});

router.get('/:hash', function (req, res) {

    var query = {'shortUrl': baseUrl + '/' + req.params.hash};

    console.log(query);
    redir.findOne(query, (err, redir) => {
        if (err) {
            console.log(err);
        }
        else if (redir) {
            console.log('found');
            res.redirect(redir.url);
        }
        else {
            res.render('404');
        }
    });
});

router.post('/new', function (req, res) {
    const newHash = shortid.generate();

    const newRedir = new redir({
        shortUrl: baseUrl + '/' + newHash,
        url: req.body.url,
        createdAt: new Date()
    });

    newRedir.save(function (err, redir) {
        if (err) {
            console.log(err);
        }
        else {
            res.send(redir);
        }
    });
});

module.exports = router;
