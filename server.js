const Hapi = require('hapi');
const server = new Hapi.Server();
const routes = require('./routes');
const mongoose = require('mongoose');

try {
    var config = require('./env.json');
}
catch (e) {
    if (e.code === 'MODULE_NOT_FOUND') {
        console.log("CANNOT LOAD env.json");
    }
}

const mongoUri = process.env.MONGODB_URI || config.MONGODB_URI;
console.log(mongoUri);
