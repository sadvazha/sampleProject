'use strict';

const bodyParser = require('body-parser')
const config = require('./config');
const express = require("express");

const authorization = require('./authorization');
const library = require('./modules/library');
const user = require('./modules/user');
const books = require('./modules/books');

const app = express();
// TODO: integrate ajv
// TODO: set options for body-parser
// TODO: implement simple authorization with JWT tokens that will be stroed in Redis
// TODO: wright down Swagger specification
// TODO: implement all other endpoints for books, libraries and users
// TODO: add register and login endpoints that would not require authorizaion
// TODO: implement basic error handling
// TODO: implement error handling for unhandledRejection
// TODO: do something with callbacks from mongoose (bluebirf.promisify???)
// TODO: wright more TODOs

app.use(bodyParser.json());
// all requests below must come from authorized user
app.use(authorization);

// modules returning routers
app.use(library);
app.use(user);
app.use(books);

const init = async () => {
    try {
        const MongoDB = require('./db/MongoDB');
        await MongoDB.openConnection();
    
        app.listen(config.port, config.host, () => console.log(`Server listening on ${config.host}:${config.port}`));
    } catch (e) {
        console.error(e);
    }
};

init();
