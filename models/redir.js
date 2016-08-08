const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const redirSchema = new Schema({
    shortUrl: String,
    url: String,
    createdAt: Date
});

module.exports = mongoose.model('Redir', redirSchema);
