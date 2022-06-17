// const { Router } = require('express');
// require('dotenv').config();
// const axios = require('axios');
// const { DishTypes } = require('../db.js');


// const getAllDish = async () => {
// const apiKey = process.env.YOUR_API_KEY;
// const apiUrl = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&addRecipeInformation=true&number=50`)
// const typesDish = apiUrl.data.results.map(d=>d.dishTypes)
// const arrTotalDish = typesDish.flat()     // concatena todos los arrays
// // const arrTotal = arrDish1.concat(arrTotalDish)
// const objTotal = new Set(arrTotalDish)        // elimina los duplicados
// const arrSet = [...objTotal]
// const arrMap = arrSet.map(d=>{return {name:d}})
// await DishTypes.bulkCreate(arrMap)
// };


// module.exports = {getAllDish};