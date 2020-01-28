'use strict';

const router = require('express').Router();
const booksDb = require('../db/books');

router.post('/books', async (req, res, next) => { 
    try {
        // here could have been ajv validator
        await booksDb.createBook(req.body);
        res.statusCode = 201;
        res.end();
    } catch(e) {
        next(e);
    }
});

router.get('/books', async (req, res, next) => { 
    try {
        // here could have been ajv validator
        const books = await booksDb.getBooks();
        res.send(books);
    } catch(e) {
        next(e);
    }
});

module.exports = router;