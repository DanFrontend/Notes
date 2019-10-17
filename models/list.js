const {Schema, model} = require('mongoose');

const listSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
});

module.exports = model('List', listSchema);