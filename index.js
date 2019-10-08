const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const todoRouter = require('./routes/todos.js')

const PORT = 3000;

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(todoRouter);

async function start() {
    try {
        await mongoose.connect('mongodb+srv://daniel000:1FYFVf12@cluster0-w4m3i.mongodb.net/admin?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useFindAndModify: false
        });
        app.listen(PORT, ()=> {
            console.log('ok')
        })
    } catch (e) {
        console.log(e);
    }
}

start();