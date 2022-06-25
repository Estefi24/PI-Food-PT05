const { Router } = require('express');
require('dotenv').config();
const axios = require('axios');
const { Recipe, Diet} = require('../db');

const router = Router();

const getApiInfo = async () => {
    const apiKey = process.env.YOUR_API_KEY;
    const apiUrl = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&addRecipeInformation=true&number=50`);	
const apiInfo = await apiUrl.data.results.map(d => {
        return {
            id: d.id, 
            image: d.image,
            title: d.title,
            dishTypes: d.dishTypes?.map(element => element),  
            diets: d.diets?.map(element => element),          
            summary: d.summary,  
            aggregateLikes: d.aggregateLikes,          
            healthScore: d.healthScore,  
            steps: d.analyzedInstructions[0]?.steps.map(s=>s.step).join("")
        };
    });
    return apiInfo;
};

const getDbInfo = async () => {
    const db = await Recipe.findAll({
        include:[{
            model: Diet,
            attributes: ['name']
        }]
    });

const dbInfo= await db?.map(d => {
        return {
        id: d.id,
        image: d.image,
        title: d.title,
        dishTypes: d.dishTypes,
        diets: d.diets.map(element => element.name),
        summary: d.summary,
        aggregateLikes: d.aggregateLikes,
        healthScore: d.healthScore,
        steps: d.steps,
        createdDb: d.createdDb
    };
});
        return dbInfo;
};

const getAllRecipes = async () => {
    const dbInfo = await getDbInfo();
    const apiInfo = await getApiInfo();
    const infoTotal = dbInfo.concat(apiInfo);
    return infoTotal;
};

router.get('/recipes', async (req, res, next) => {
    const title = req.query.name;
    try{
        let recipesTotal = await getAllRecipes();
        if(title){
            let recipeTitle = await recipesTotal.filter(t=>t.title.toLowerCase().includes(title.toLowerCase()))
            recipeTitle.length?
            res.status(200).send(recipeTitle) :
            res.status(404).send('No se encontró la receta')
        }else{
            res.status(200).send(recipesTotal)
        }
    }catch(err){
        next(err)
    }
});

router.get('/recipes/:id', async (req, res, next) => {
    const idReceta = req.params.id;
    try{
        let recipesTotal = await getAllRecipes();
        if(idReceta){
        let recipeById = recipesTotal.filter(r=> r.id == idReceta)
        recipeById.length ?
        res.status(200).send(recipeById) :
        res.status(404).send('No se encontró esa receta')
        }
    }catch(err){
        next (err)
}
});


router.get('/types', async (req, res, next) => {
    try{
        const dietType = await Diet.findAll();
        res.status(200).json(dietType)
    }catch(err){
        next(err)
    }
});

router.post('/recipe', async (req, res) => {
    
    const { title, summary, image, dishTypes, aggregateLikes, healthScore, steps, diets } = req.body;

    const recipeCreated = await Recipe.create({
        title,
        summary,
        image,    
        aggregateLikes,
        dishTypes,
        healthScore,
        steps

    });

diets.forEach(async element => {
    let dietDb = await Diet?.findOne({ where: {name: element} })
    recipeCreated.addDiet(dietDb)
    
});
    res.json(recipeCreated)
});


module.exports = router;