module.exports = function (app) {

    const personas = require('../controller/persona.controller.js');

    // Create a new person
    app.post('/api/personas', personas.create);

    // Retrieve all persons
    app.get('/api/personas', personas.findAll);

    // Retrieve a single person by Id
    app.get('/api/personas/:personaId', personas.findById);

    // Update a person with Id
    app.put('/api/personas/:personaId', personas.update);

    // Delete a person with Id
    app.delete('/api/personas/:personaId', personas.delete);
}