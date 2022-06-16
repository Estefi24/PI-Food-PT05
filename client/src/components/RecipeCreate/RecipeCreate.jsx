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
            aggregateLikes: 0,
            healthScore: 0,
            analizedInstructions: '',
            diets: [],
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
        
        validation: true       
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
    }

    handleChange(e) {
        
        if(e.target.type === 'checkbox'){
            this.setState({recipe: {...this.state.recipe , [e.target.name]: e.target.checked}});
        }
        else{

            var regEx = /^[A-Za-z0-9\s]+$/g

            // var regEx = /^[\t\n\v\f\r \u00a0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000]*$/;

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

    async handleSubmit(e) {
        console.log(this.state)
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
console.log(this.state.diets);

if (this.state.validation){
    const response= await axios.post('/food/recipe', {
        recipe: {
        title: this.state.recipe.title,
        summary: this.state.recipe.summary,
        image: this.state.recipe.image,
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
                    <div className='form inputImageBox'>
                    <input type="file" name="image" placeholder="Image" onChange={this.handleChange} value={this.state.recipe.image}/>
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
                    <input type="checkbox" name='glutenFree' value={this.state.glutenFree} onChange={this.handleChange}/> 
                    <label className='typesInput' >Dairy Free</label>
                    <input type="checkbox" name='dairyFree' value={this.state.dairyFree} onChange={this.handleChange}/> 
                    <label className='typesInput'>Lacto Ovo Vegetarian</label>
                    <input type="checkbox" name='lactoOvoVegetarian' value={this.state.lactoOvoVegetarian} onChange={this.handleChange}/> 
                    <label className='typesInput'>Vegan</label>
                    <input type="checkbox" name='vegan' value={this.state.vegan} onChange={this.handleChange}/> 
                    <label className='typesInput'>Paleolithic</label>
                    <input type="checkbox" name='paleolithic' value={this.state.paleolithic} onChange={this.handleChange}/> 
                    <label className='typesInput'>Primal</label>
                    <input type="checkbox" name='primal' value={this.state.primal} onChange={this.handleChange}/> 
                    <label className='typesInput'>Whole 30</label>
                    <input type="checkbox" name='whole30' value={this.state.whole30} onChange={this.handleChange}/> 
                    <label className='typesInput'>Pescatarian</label>
                    <input type="checkbox" name='pescatarian' value={this.state.pescatarian} onChange={this.handleChange}/> 
                    <label className='typesInput'>Ketogenic</label>
                    <input type="checkbox" name='ketogenic' value={this.state.ketogenic} onChange={this.handleChange}/> 
                    <label className='typesInput'>Fodmap Friendly</label>
                    <input type="checkbox" name='fodmapFriendly' value={this.state.fodmapFriendly} onChange={this.handleChange}/> 
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