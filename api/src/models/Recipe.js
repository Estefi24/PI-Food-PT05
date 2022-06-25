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
    steps:{
      type: DataTypes.STRING
    },
    image:{
      type:DataTypes.TEXT,
      defaultValue: 'https://st.depositphotos.com/2786775/3990/v/950/depositphotos_39907919-stock-illustration-vegan-food-seamless-pattern.jpg'
    },
    createdDb:{
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false
    }

  });
};