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
      type: DataTypes.INTEGER
    },
    dishTypes:{
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
    healthScore: {
      type: DataTypes.INTEGER
    },
    analizedInstructions:{
      type: DataTypes.TEXT
    },
    image:{
      type:DataTypes.TEXT
    },
    createdDb:{
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false
    }

  });
};