const { Router } = require('express');
const List = require('../models/List');
// const N = require('../models/note');
const router = Router();

router.get('/',  async (req, res)=> {
    const todos = await List.find({}).sort({completed: 'asc'})
    res.render('index', {
        title: 'Todos list',
        todos
    })
});

router.get('/create-lists', async (req, res)=> {
    const todos = await List.find({})
    res.render('create-lists', {
        title: 'Create todo',
        isCreate: true,
        todos
    })
});

router.post('/create-lists', async (req, res) => {
    const list = new List({
        title: req.body.title
    })
    await list.save()
    res.redirect('/')
})

router.post('/save-edit', async (req, res) => {
    const list = await List.findById(req.body.id)
    list.title = req.body.title
    await list.save()
  
    res.redirect('/')
})

router.post('/complete', async (req, res) => {
    const list = await List.findById(req.body.id)
    list.completed = !!req.body.completed
    await list.save()
  
    res.redirect('/')
})


router.get('/lists/delete/:id', function (req, res) {
    const id = req.params.id;

    List.findByIdAndRemove(id, function (err) {
        if (err) throw err;

        res.redirect('/')
    });
});

router.get('/lists/change/:listId', async function (req, res) {
    const todos = await List.find({})
    const listId = req.params.listId;
    List.findById(listId, function (err, list) {
        res.render('edit-list', {
            list: list,
            todos,
            listId
        });
    });
});

router.get('/lists/:listId', async function (req, res) {
    const todos = await List.find({})
    const listId = req.params.listId;
    List.findById(listId, function (err, list) {
        res.render('list-visible', {
            list: list,
            todos,
            listId
        });

    });
});


router.get('/create-notes', (req, res)=> {
    res.render('create-notes')
});

module.exports = router;

