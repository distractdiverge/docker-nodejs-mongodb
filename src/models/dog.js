const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres', 'pguser', 'pgpass123', {
    host: 'postgres',
    dialect: 'postgres'
});

const Dog = sequelize.define('dog', {
  name: Sequelize.STRING,
  birthday: Sequelize.DATE
});

Dog.sync().then(() => {
    return Dog.create({
        name: 'Woffy',
        birthday: '10/10/2010'
    });
})

module.exports = Dog;
