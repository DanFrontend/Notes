const { Router } = require('express');
// const L = require('../models/list');
// const N = require('../models/note');
const router = Router();

router.get('/',  (req, res)=> {

    res.render('index')
});

router.get('/create-list', (req, res)=> {
    res.render('create-list')
});

router.get('/create-notes', (req, res)=> {
    res.render('create-notes')
});

module.exports = router;

