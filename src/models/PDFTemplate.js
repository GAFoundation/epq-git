const { Model, DataTypes } = require('sequelize');

class PDFTemplate extends Model {}

PDFTemplate.init({
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
}, {
    sequelize: require('../database'), // Adjust the path as necessary
    modelName: 'PDFTemplate',
});

module.exports = PDFTemplate;