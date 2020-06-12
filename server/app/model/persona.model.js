module.exports = (sequelize, Sequelize) => {
    const Persona = sequelize.define('persona', {
      id: { type: Sequelize.INTEGER(11), primaryKey: true },
      cedula: {
      type: Sequelize.STRING
      },
      nombre: {
        type: Sequelize.STRING
      },
      apellido: {
        type: Sequelize.STRING
      }
    });

    return Persona;
  }