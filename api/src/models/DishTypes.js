const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define ('dishTypes', {
        name: {
            type: DataTypes.STRING,
            // allowNull: false,
        },
        
    })
} 