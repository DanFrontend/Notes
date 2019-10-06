const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const todoRouter = require('./routes/todos.js');
const app = express();
const port = 3010;
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", "pug");
app.use(todoRouter);

(async ()=> {
    {
        try {
            await mongoose.connect('mongodb+srv://daniel000:1FYFVf12@cluster0-w4m3i.mongodb.net/admin?retryWrites=true&w=majority', {
                useNewUrlParser: true,
                useFindAndModify: false
            });
            app.listen(port, () => console.log('Server has been started...'));
        } catch (e) {
            console.log(e)
        }
    }
})();




