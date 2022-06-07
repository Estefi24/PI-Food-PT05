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
            aggregateLikes: '',
            healthScore: '',
            steps: ''
        },
        validation: true
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
    }

    handleChange(e) {
        this.setState({recipe: {...this.state.recipe, [e.target.name]: e.target.value}});

        switch(e.target.name){
            case 'title': {document.write('Es un title'); break;}
            case 'summary': {document.write('Es un summary'); break;}
            case 'aggregateLikes': {document.write('Es un Likes'); break;}
            case 'healthScore': {document.write('Es un healthScore'); break;}
            case 'steps': {document.write('Es un steps'); break;}
            default:
                break;
        }

    }

    handleSubmit(e) {
        e.preventDefault();

        axios.post('/food/recipe', {
            recipe: {
            title: this.state.recipe.title,
            summary: this.state.recipe.summary,
            aggregateLikes: this.state.recipe.aggregateLikes,
            healthScore: this.state.recipe.healthScore,
            steps: this.state.recipe.steps,
            }
        })
        .then(function (response) {
            console.log(response);
        });
    }

    render() {
        return (
            <div className='create'>
            <div className='buttonHome'>
                <Link to='/home'><button>Create Recipe</button></Link>
                <h1>Upload your own recipe!!</h1>
            </div>
            <div className='form'>
                <form action="" className ='recipeCreateForm' onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                    <input type="text" name="title" placeholder="Name" onChange={this.handleChange} value={this.state.recipe.title}/>
                    </div>
                    <div className='form-group'>
                    <input type="text" name="summary" placeholder="Summary" onChange={this.handleChange} value={this.state.recipe.summary}/>
                    </div>
                    <div className='form-group'>
                    <input type="number" name="aggregateLikes" placeholder="AggregateLikes" onChange={this.handleChange} value={this.state.recipe.aggregateLikes} />
                    </div>
                    <div className='form-group'>
                    <input type="number" name="healthScore" placeholder="HealthScore" onChange={this.handleChange} value={this.state.recipe.healthScore}/>
                    </div>
                    <div className='form-group'>
                    <input type="text" name="steps" placeholder="Steps" onChange={this.handleChange} value={this.state.recipe.steps}/>
                    </div>
                    <div className='form-group'>
                    <input type="text" name="diets" placeholder="Diets" onChange={this.handleChange} value={this.state.recipe.diets}/>
                    </div>
                    <div className='buttonCreate'>
                    <button type='reset' form='general'>Create another recipe</button>
                    </div>
                    <div className='buttonSave'>
                    <button type='submit' >Save recipe</button>
                    </div>
                </form>
                </div>
            </div>
        )
    }}


export default RecipeCreate;