const sequelize = require('../config/database');
const { DataTypes, HasMany } = require('sequelize');
import Usuario from './Usuario';

const Nota = sequelize.define('Nota', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    valor: DataTypes.INTEGER,
    disciplina: DataTypes.STRING
});

Usuario(HasMany(Nota));
Nota.belongsTo(Usuario);