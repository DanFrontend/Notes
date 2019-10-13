const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const todoRouter = require('./routes/todos');
const app = express();
const port = 3010;

const listsRouter = require('./routes/create-list');


app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", "pug");
app.use(todoRouter);
// app.use(listsRouter);

(async ()=> {
    {
        try {
            await mongoose.connect('mongodb+srv://daniel000:1FYFVf12@cluster0-w4m3i.mongodb.net/todos', {
                useNewUrlParser: true,
                useFindAndModify: false,
                useUnifiedTopology: true
            });
            app.listen(port, () => console.log('Server has been started...'));
        } catch (e) {
            console.log(e)
        }
    }
})();




