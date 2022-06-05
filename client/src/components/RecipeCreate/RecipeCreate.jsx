// import React from 'react';
// import axios from 'axios'
// import './/RecipeCreate.css'

// class RecipeCreate extends React.Component {
//     constructor() {
//         super();
//         this.state = {recipe: {
//             title: '',
//             summary: '',
//             aggregateLikes: '',
//             healthScore: '',
//             steps: ''
//         },
//         validation: true
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
    
//     }

//     handleChange(e) {
//         this.setState({recipe: {...this.state.recipe, [e.target.name]: e.target.value}});

//         switch(e.target.name){
//             case 'title': {document.write('Es un title'); break;}
//             case 'summary': {document.write('Es un summary'); break;}
//             case 'aggregateLikes': {document.write('Es un Likes'); break;}
//             case 'healthScore': {document.write('Es un healthScore'); break;}
//             case 'steps': {document.write('Es un steps'); break;}
//             default:
//                 break;
//         }

//     }

//     handleSubmit(e) {
//         e.preventDefault();

//         axios.post('/food/recipe', {
//             recipe: {
//             title: this.state.recipe.title,
//             summary: this.state.recipe.summary,
//             aggregateLikes: this.state.recipe.aggregateLikes,
//             healthScore: this.state.recipe.healthScore,
//             steps: this.state.recipe.steps,
//             }
//         })
//         .then(function (response) {
//             console.log(response);
//         });
//     }

//     render() {
//         return (
//             <div className ='recipeCreateContainer padding-top-box'>
//                 <form action="" className ='recipeCreateForm' onSubmit={this.handleSubmit}>
//                     <input type="text" name="title" placeholder="Name" onChange={this.handleChange} value={this.state.recipe.title}/>
//                     <input type="text" name="summary" placeholder="Summary" onChange={this.handleChange} value={this.state.recipe.summary}/>
//                     <input type="number" name="aggregateLikes" placeholder="AggregateLikes" onChange={this.handleChange} value={this.state.recipe.aggregateLikes} />
//                     <input type="number" name="healthScore" placeholder="HealthScore" onChange={this.handleChange} value={this.state.recipe.healthScore}/>
//                     <input type="text" name="steps" placeholder="Steps" onChange={this.handleChange} value={this.state.recipe.steps}/>
//                     <input type="text" name="diets" placeholder="Diets" onChange={this.handleChange} value={this.state.recipe.diets}/>
//                     <button type="submit" id='recipeCreateSubmit'> Create Recipe</button>
//                 </form>
//             </div>
//         )
//     }}


// export default RecipeCreate;