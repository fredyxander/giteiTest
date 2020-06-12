const db = require('../config/db.config.js');
const Persona = db.personas;

// FETCH all Customers
exports.findAll = (req, res) => {
  Persona.findAll().then(personas => {
    // Send all customers to Client
    res.send(personas);
  });
};
