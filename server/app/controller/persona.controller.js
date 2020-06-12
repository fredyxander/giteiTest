const db = require('../config/db.config.js');
const Persona = db.personas;

//validations and controllers
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
exports.update = async  (req, res, next) => {
    const id = req.params.personaId;
    try {
        const updatedInd = await Persona.update({
            cedula: req.body.cedula,
            nombre: req.body.nombre,
            apellido: req.body.apellido
        }, {
            where: {
                id: req.params.personaId
            }
        });
        if (updatedInd) {
            res.status(200).send('persona con id = ' + id + 'actualizada');
        }
        else {
            res.status(404).send('No se encontro a esta persona');
        }
    }
    catch (e) {
        next(e);
    }
};

// Delete a person by Id
exports.delete = async (req, res, next) => {
    const id = req.params.personaId
    try {
        const deletedInd = await Persona.destroy({
            where: {
                id: id
            }
        });
        if (deletedInd) {
            res.status(200).send('persona con id = ' + id + 'eliminada');
        }
        else {
            res.status(404).send('No se encontro o ya se elimino');
        }
    }
    catch (e) {
        next(e);
    }
};
