module.exports = function (app) {

    const personas = require('../controller/persona.controller.js');

    // Retrieve all Customer
    app.get('/api/personas', personas.findAll);
}