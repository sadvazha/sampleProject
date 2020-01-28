'use strict';

module.exports = {
    host: process.env.HOST || '0.0.0.0',
    port: 8000,

    redis: {
        host: 'localhost',
        port: '6379',
    },

    mongoDB: {
        host: 'mongodb',
        port: '27017',
        database: 'sample-app',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
    },
}