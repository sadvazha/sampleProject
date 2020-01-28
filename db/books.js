'use strict';

const MongoDB = require('./MongoDB');

async function createBook(book) {
    const bookDocument = new MongoDB.Book(book);
    return bookDocument.save();
}

async function getBooks() {
    return new Promise ((resolve, reject) => MongoDB.Book.find((err, result) => {
        if (err) {
            reject(err)
        }
        resolve(result);
    }))
    
}

module.exports = {
    createBook,
    getBooks,
};