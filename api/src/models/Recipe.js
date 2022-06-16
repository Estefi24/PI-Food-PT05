const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
 
  sequelize.define('recipe', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true    
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    aggregateLikes: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    healthScore: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    analizedInstructions:{
      type: DataTypes.TEXT,
      allowNull: true,
    },
    createdDb:{
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false
    }

  });
};