import React from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import './/RecipeCreate.css'


class RecipeCreate extends React.Component {
    
    constructor() {
        super();
        this.state = {recipe: {
            title: '',
            summary: '',
            image: '',
            dishTypes: [],
            aggregateLikes: 0,
            healthScore: 0,
            analizedInstructions: '',
            diets: []
//.......................................................................
            // glutenFree: false,
            // dairyFree:  false,
            // lactoOvoVegetarian: false,
            // vegan:  false,
            // paleolithic: false,
            // primal: false,
            // whole30:  false,
            // pescatarian:  false,
            // ketogenic:  false,
            // fodmapFriendly:  false
        },
        allRecipes: [],
        
        validation: true       
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
    }

    handleChange(e) {
        
        if(e.target.type === 'checkbox'){
            this.setState({recipe: {...this.state.recipe , [e.target.name]: [...this.state.recipe[e.target.name], e.target.value]}});
        }
        else{
             // var regEx = /^[\t\n\v\f\r \u00a0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000]*$/;

            // var regEx = /^[A-Za-z0-9\s]+$/g

            // if (e.target.value.length < 256 && regEx.test(e.target.value) === true) {
            //     this.setState({validation: true})
            //     e.target.className = '';
            // } else {
            //     this.setState({validation: false})
            //     e.target.className = 'addRecipeFormValidationErrorInput';
            // }
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
    this.setState ({allRecipes: typesDish})

}


    async handleSubmit(e) {
        // console.log(this.state)
        e.preventDefault();
        alert('Congratulations you created a new recipe!');

//---------------------------------------------------
//Añadir al array de dietas
if(this.state.recipe.glutenFree){ this.setState= {...this.state.recipe, recipe:{ diets: this.state.recipe.diets.push('gluten free') } }; }
if(this.state.recipe.dairyFree){ this.setState= {...this.state.recipe, recipe:{ diets: this.state.recipe.diets.push('dairy free') } }; }
if(this.state.recipe.lactoOvoVegetarian){ this.setState= {...this.state.recipe, recipe:{ diets: this.state.recipe.diets.push('lacto ovo vegetarian') } }; }
if(this.state.recipe.vegan){ this.setState= {...this.state.recipe, recipe:{ diets: this.state.recipe.diets.push('vegan') } }; }
if(this.state.recipe.paleolithic){ this.setState= {...this.state.recipe, recipe:{ diets: this.state.recipe.diets.push('paleolithic') } }; }
if(this.state.recipe.primal){ this.setState= {...this.state.recipe, recipe:{ diets: this.state.recipe.diets.push('primal') } }; }
if(this.state.recipe.whole30){ this.setState= {...this.state.recipe, recipe:{ diets: this.state.recipe.diets.push('whole 30') } }; }
if(this.state.recipe.pescatarian){ this.setState= {...this.state.recipe, recipe:{ diets: this.state.recipe.diets.push('pescatarian') } }; }
if(this.state.recipe.ketogenic){ this.setState= {...this.state.recipe, recipe:{ diets: this.state.recipe.diets.push('ketogenic') } }; }
if(this.state.recipe.fodmapFriendly){ this.setState= {...this.state.recipe, recipe:{ diets: this.state.recipe.diets.push('fodmap friendly') } }; }
// console.log(this.state.diets);

if (this.state.validation){
    console.log(this.state.recipe.image);
    const response= await axios.post('/food/recipe', {
        recipe: {
        title: this.state.recipe.title,
        summary: this.state.recipe.summary,
        image: this.state.recipe.image,
        dishTypes: this.state.recipe.dishTypes,
        aggregateLikes: this.state.recipe.aggregateLikes,
        healthScore: this.state.recipe.healthScore,
        analizedInstructions: this.state.recipe.analizedInstructions,
        diets: this.state.recipe.diets
        }
    })
    console.log(response.data)
    // .then( res => {
    //     console.log(res);

    // if(res.status === 200){
    //     alert('Congratulations you created a new recipe!');
    // }
    // })x
    //     console.log(this.state);
}
}  

    // componentDidMount() {
    //     axios.get('/food/types').then (res => {
    //         this.setState({diets: res.data.value})

    //     })
    // }
    
    render() {
        console.log(this.state.recipe.diets);
        return (
            <div className='create'>
            {/* <div className='buttonHome'> */}
                {/* <Link to='/home'><button>Create Recipe</button></Link> */}
            {/* </div> */}
                <h1>Upload your own recipe!!</h1>
                <div className='buttonHome' >
                <Link to='/Home' className='go back to home'><button>Go back to Home</button></Link>
                    {/* <button type='submit' onClick={this.handleSubmit}>Go back to Home</button> */}
                </div>
            <div className='form'>
                <form action="" className ='recipeCreateForm' onSubmit={this.handleSubmit}>
                    <div className='form'>
                    <input type="text" name="title" placeholder="Name" onChange={this.handleChange} value={this.state.recipe.title}/>
                    {/* {error.title && <p>{error.title}</p>} */}
                    </div>
                    <div className='form'>
                    <input type="text" name="summary" placeholder="Summary" onChange={this.handleChange} value={this.state.recipe.summary}/>
                    </div>
                    {/* <div className='form inputImageBox'>
                    <input type="file" name="image" placeholder="Image" onChange={this.handleChange} value={this.state.recipe.image}/>
                    </div> */}
                    <div className='form inputImageBox'>
                        <input type="url" name="image" placeholder= "URL de imagen" value={this.state.recipe.image} onChange={this.handleChange} required/>
                    </div>
                    <div className='form'>
                        {this.state.allRecipes.map((t) => {
                       return <label>
                            <input type="checkbox" name="dishTypes" onChange={this.handleChange} value={t}/>
                            {t}
                        </label>
                        })}
                    </div>                         
                    <div className='form'>
                    <input type="number" name="aggregateLikes" placeholder="AggregateLikes" onChange={this.handleChange} value={this.state.recipe.aggregateLikes} />
                    </div>
                    <div className='form'>
                    <input type="number" name="healthScore" placeholder="HealthScore" onChange={this.handleChange} value={this.state.recipe.healthScore}/>
                    </div>
                    <div className='form'>
                    <input type="text" name="analizedInstructions" placeholder="analizedInstructions" onChange={this.handleChange} value={this.state.recipe.analizedInstructions}/>
                    </div> 
                    <div className='checkboxContainer'>
                    <label className='typesInput'>Gluten Free</label>
                    <input type="checkbox" name= 'diets' value= 'glutenFree' onChange={this.handleChange}/> 
                    <label className='typesInput' >Dairy Free</label>
                    <input type="checkbox" name='diets' value= 'dairyFree' onChange={this.handleChange}/> 
                    <label className='typesInput'>Lacto Ovo Vegetarian</label>
                    <input type="checkbox" name='diets' value='lactoOvoVegetarian' onChange={this.handleChange}/> 
                    <label className='typesInput'>Vegan</label>
                    <input type="checkbox" name='diets' value='vegan' onChange={this.handleChange}/> 
                    <label className='typesInput'>Paleolithic</label>
                    <input type="checkbox" name='diets' value='paleolithic' onChange={this.handleChange}/> 
                    <label className='typesInput'>Primal</label>
                    <input type="checkbox" name='diets' value='primal' onChange={this.handleChange}/> 
                    <label className='typesInput'>Whole 30</label>
                    <input type="checkbox" name='diets' value= 'whole30' onChange={this.handleChange}/> 
                    <label className='typesInput'>Pescatarian</label>
                    <input type="checkbox" name='diets' value='pescatarian' onChange={this.handleChange}/> 
                    <label className='typesInput'>Ketogenic</label>
                    <input type="checkbox" name='diets' value='ketogenic' onChange={this.handleChange}/> 
                    <label className='typesInput'>Fodmap Friendly</label>
                    <input type="checkbox" name='diets' value='fodmapFriendly' onChange={this.handleChange}/> 
                    </div>                                        
                    <div className='buttonCreate'>
                    <button type='submit' >Create</button>
                    </div>
                    {/* <div className='buttonSave'>
                    <button type='submit' >Save recipe</button>
                    </div> */}
                </form>
                </div>
            </div>
        )
    }}


export default RecipeCreate;