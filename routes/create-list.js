const routes = require('express').Router();
const List = require('../models/List');

const mongoose = require('mongoose');

routes.delete('/', function (req, res) {
    const id = req.body.id;

    List.findByIdAndRemove(id, function (err) {
        if (err) throw err;

        res.json({
            massege: `Client was deleted --> ${id}`
        });
    });
});
