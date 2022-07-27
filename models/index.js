const bookshelf = require('../bookshelf');

const Poster = bookshelf.model('Poster', {
    tableName: 'poster'
});

module.exports = {Poster};