'use strict';

const config = require('../config');
const mongoose = require('mongoose');

const MODEL_NAMES = {
    BOOKS: 'books',
    LIBRARY: 'library',
    USER: 'user',
};

const Book = mongoose.model(MODEL_NAMES.BOOKS, new mongoose.Schema({
    name: { type: String },
    releaseDate: { type: Date },
    description: { type: String },
}));
const Library = mongoose.model(MODEL_NAMES.LIBRARY, new mongoose.Schema({
    name: { type: String },
    description: { type: String },
    books: [{
        bookId: { type: mongoose.SchemaTypes.ObjectId },
        available: { type: Number },
        summary: { type: Number },
    }],
}));
const User = mongoose.model(MODEL_NAMES.USER, new mongoose.Schema({
    email: { type: String },
    name: { type: String },
    books: [{
        bookId: { type: mongoose.SchemaTypes.ObjectId },
    }],
}));

class MongoDB {
    async openConnection() {
        await mongoose.connect(`mongodb://${config.mongoDB.host}:${config.mongoDB.port}/${config.mongoDB.database}`, config.mongoDB.options);
        this.db = mongoose.connection;
    }

    get Book() {
        return Book;
    }
    
    get Library() {
        return Library;
    }
    
    get User() {
        return User();
    }
}

module.exports = new MongoDB();