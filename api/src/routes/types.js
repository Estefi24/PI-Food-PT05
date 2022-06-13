const { Router } = require('express');
require('dotenv').config();
const axios = require('axios');
const { Diet } = require('../db.js');


const getAllDiets = async () => {
const apiKey = process.env.YOUR_API_KEY;
// const arrDieta1 = ["low fodmap"];
const apiUrl = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&addRecipeInformation=true&number=50`)
const typesDiets = apiUrl.data.results.map(d=>d.diets)
const arrTotalDietas = typesDiets.flat()     // concatena todos los arrays
// const arrTotal = arrDieta1.concat(arrTotalDietas)
const objTotal = new Set(arrTotalDietas)        // elimina los duplicados
const arrSet = [...objTotal]
const arrMap = arrSet.map(d=>{return {name:d}})
await Diet.bulkCreate(arrMap)
};


module.exports = {getAllDiets};
