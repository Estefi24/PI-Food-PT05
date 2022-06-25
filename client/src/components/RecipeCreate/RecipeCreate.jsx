/* eslint-disable no-unused-vars */
import React from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import './/RecipeCreate.css';
import '../carpeta.css';


class RecipeCreate extends React.Component {
    constructor() {
        super();
        this.state = {recipe: {
            title: '',
            summary: '',
            // image: '',
            dishTypes: [],
            aggregateLikes: 0,
            healthScore: 0,
            steps: '',
            diets: []
        },
        allDishTypes: [],
        allDiets: [],
        
        validation: false      
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
    }

    handleChange(e) {        
        if(e.target.type === 'checkbox'){
            if (e.target.checked) {
                this.setState({recipe: {...this.state.recipe , [e.target.name]: [...this.state.recipe[e.target.name], e.target.value]}});
            } else {
                this.setState({recipe: {...this.state.recipe, [e.target.name]: this.state.recipe[e.target.name].filter(element => e.target.value !== element)}})
            }        
        }
        else{

            var regEx = /^[A-Za-z0-9\s]+$/g

            if (e.target.value.length < 256 && regEx.test(e.target.value) === true) {
                this.setState({validation: true})
                e.target.className = '';
            } else {
                this.setState({validation: false})
                e.target.className = 'addRecipeFormValidationErrorInput';
            }
            this.setState({recipe: {...this.state.recipe , [e.target.name]: e.target.value}});
        }
    }

componentDidMount = async () =>{
    const dishRecipes = await axios.get('http://localhost:3001/food/recipes')
    let typesDish = []
    dishRecipes.data.forEach((d) => {
        d.dishTypes.forEach((t)=> {
            if (! typesDish.includes(t))typesDish.push(t)
        })
    })
    this.setState ({allDishTypes: typesDish})

    const dietRecipes = await axios.get('http://localhost:3001/food/types')
        let typesDiet = []
        dietRecipes.data.forEach((d) => {
                typesDiet.push(d.name)
            })
        this.setState ({allDiets: typesDiet})
    }


    async handleSubmit(e) {
        e.preventDefault();
        if (this.state.recipe.title.length ===0){
            alert('you must complete the title box');
            return;
        } if (this.state.recipe.summary.length ===0){
            alert('you must complete the summary box');    
            return;
        }else{
        alert('Congratulations you created a new recipe!');
        window.location.href= 'http://localhost:3000/Home'
        };

if (this.state.validation){
        let dietas = this.state.recipe.diets
    
    const response= await axios.post('http://localhost:3001/food/recipe', {
        title: this.state.recipe.title,
        summary: this.state.recipe.summary,
        image: this.state.recipe.image,
        dishTypes: this.state.recipe.dishTypes,
        aggregateLikes: this.state.recipe.aggregateLikes,
        healthScore: this.state.recipe.healthScore,
        steps: this.state.recipe.steps,
        diets:dietas
        }
    )
}
}  

    render() {
        return (
            <div className='container'>
                <div className='buttonHome' >
                    <Link to='/Home' className='btn'>◀ Go back Home</Link>
                </div>
                
            <div className='form-container'>
                <form action="" className ='form-recipe' onSubmit={this.handleSubmit} method="post">
                    <fieldset>
                        <legend>
                            <h1>Upload your own recipe!!</h1>
                        </legend>

                        <div className='form'>
                            <label htmlFor="title">Recipe title</label>
                            <input type="text" name="title" onChange={this.handleChange} value={this.state.recipe.title}/>
                        </div>

                        <div className='form inputImageBox'>
                            <label htmlFor="image">URL image</label>
                            <input type="url" name="image" value={this.state.recipe.image} onChange={this.handleChange} />
                        </div>

                        <div className='form'>
                            <label htmlFor="aggregateLikes">Aggregate Likes</label>
                            <input type="number" name="aggregateLikes" onChange={this.handleChange} value={this.state.recipe.aggregateLikes} />
                        </div>

                        <div className='form'>
                            <label htmlFor="healthScore">Health score</label>
                            <input type="number" name="healthScore" onChange={this.handleChange} value={this.state.recipe.healthScore}/>
                        </div>   
                            <p>Choose the dish types</p>
                            <div className='checks'>
                                {this.state.allDishTypes.map((t, i) => {
                            return <div> 
                                    <input type="checkbox" name="dishTypes" onChange={this.handleChange} value={t}/>
                                    <label key={i}>{t}</label>
                                </div>
                            })}
                        </div>  
                        
                            <p>Choose the diets</p>
                            <div className='checks'>
                                {this.state.allDiets.map((element, i) => {
                            return <div> 
                                    <input type="checkbox" name="diets" onChange={this.handleChange} value={element}/>
                                    <label key={i}>{element}</label>
                                </div>
                            })}
                        </div>      

                        <div className='form'>
                            <label htmlFor="summary">Summary of recipe</label>
                            <textarea type="text" name="summary" onChange={this.handleChange} value={this.state.recipe.summary}></textarea>
                        </div>

                        <div className='form'>
                            <label htmlFor="steps">Instructions</label>
                            <textarea type="text" name="steps" onChange={this.handleChange} value={this.state.recipe.steps}></textarea>
                        </div>
                        <p class="mandatory"><span>*</span> mandatory fields</p>
                        <input className='submit-btn' type="submit" value="Create Recipe" />
                    </fieldset>
                </form>
                </div>
            </div>
        )
    }
}


export default RecipeCreate;