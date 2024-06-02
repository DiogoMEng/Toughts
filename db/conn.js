const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('toughts', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

try {
    sequelize.authenticate();

    console.log('Connectamos com sucesso');
} catch (err) {
    console.log('Não foi possível realizar a conexão', err);
}

module.exports = sequelize;