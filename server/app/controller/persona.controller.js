const db = require('../config/db.config.js');
const Persona = db.personas;

// Create a person
exports.create = (req, res) => {
    // Save data into MySQL database
    Persona.create({
        cedula: req.body.cedula,
        nombre: req.body.nombre,
        apellido: req.body.apellido
    }).then(persona => {
        // Send created person to client
        res.send(persona);
    });
};

// FETCH all persons
exports.findAll = (req, res) => {
    Persona.findAll().then(personas => {
        // Send all customers to Client
        res.send(personas);
    });
};

// Find a person by Id
exports.findById = (req, res) => {
    console.log(req.params.personaId);
    Persona.findByPk(req.params.personaId).then(persona => {
        res.send(persona);
    })
};

// Update a person by id
exports.update = (req, res) => {
    const id = req.params.personaId;
    Persona.update({
        cedula: req.body.cedula,
        nombre: req.body.nombre,
        apellido: req.body.apellido
    }, {
        where: {
            id: req.params.personaId
        }
    }).then(() => {
        res.status(200).send("updated successfully a person with id = " + id);
    });
};

// Delete a person by Id
exports.delete = (req, res) => {
    const personaId = req.params.personaId;
    Persona.destroy({
      where: { id: personaId }
    }).then(() => {
      res.status(200).send('deleted successfully a person with id = ' + personaId);
    });
  };