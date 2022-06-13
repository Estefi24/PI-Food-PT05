/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import React from 'react';
import './Detail.css';
import { Link } from 'react-router-dom';
import { useState , useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

export default function Detail(props) {

    const { id } = useParams();
  //Establecer un estado (variable , funcion seteadora)
    const [recipe , setRecipe] = useState({id: id , title: '' , diets: [] , image: '' , dishTypes: [] , summary: '', healtScore: '' , steps: ''});

    useEffect(() => {
        axios.get(`/food/recipes/${id}`).then(res => {
    console.log('estoy en detail')
            console.log(res.data[0])
    
            setRecipe(
                {
                    id: id,
                    title: res.data[0].title,
                    diets: res.data[0].diets,
                    image: res.data[0].image,
                    dishTypes: res.data[0].dishTypes,
                    summary: res.data[0].summary,
                    healthScore: res.data[0].healthScore,
                    aggregateLikes: res.data[0].aggregateLikes,
                    steps: res.data[0].steps

                }
            )
        }
        )
        console.log(recipe);
    }, []);

    return (
    <div className='detail'>
            <div className='buttonHome' >
            <Link to='/Home' className='go back to home'><button>Go back to Home</button></Link>
            </div>
        <div className='detailContainer'>
            <h1>Tittle:</h1>
            <h2>{recipe.title}</h2>
            <img src={recipe.image} alt="" className="detailPicture"/>
            <h3>TypeDiets:</h3>
            <p>{recipe.diets.map( (type , index=0) => {
                return <span key={index}> | {type}</span>
                })}</p>
            <h3>DishTypes:</h3>
            {recipe.dishTypes.map( (type , index=0) => {
                return <span key={index}> | {type}</span>
                })}
            <h3>HealthScore:</h3>
            <p>{recipe.healthScore}</p>
            <h3>AggregateLikes:</h3>
            <p>{recipe.aggregateLikes}</p>
            <h3>Summary:</h3>
            <p>{recipe.summary.replace(/<[^>]*>?/g, '')}</p>
            <h3>Instructions:</h3>
            <p>{recipe.steps.replace(/<[^>]*>?/g, '')}</p>
            {/* <p>{recipe.analizedInstructions ? 
            <h3>Step by step instructions: </h3> : 
            <h3>Step by step instructions: - </h3>
            }</p> */}
            {/* <p>{ recipe.steps.length > 0 ?
                <ul>{recipe.createdDb ? 
                <li>{recipe.steps}</li> :
                    recipe.analyzedInstructions[0].steps.map((p) => <li key={p.number}>{p.step}</li>)}
                </ul> : <p></p>
            }</p> */}

        </div>
    </div>
)
}






// import React from 'react';
// import './Detail.css';
// import { Link } from 'react-router-dom';

// export default function Detail(props) {
//     const recipe = detail[0]

//  return (
//     <div className='detail'>
//         <Link to='/home'><button>Home</button></Link>
//         {detail.length ?
//             <div>
//                 <h1>{recipe.title}</h1>
//                 <img src={recipe.image ? recipe.image :
//                     <img src='https://www.ecestaticos.com/image/clipping/e46e7340ef608f85706bdfb3dd69818f/la-proxima-dieta-efectiva-que-seguiras-se-basa-en-tu-plato.jpg' alt='img plato' />} alt='img comida' />
//                 <div className='titulos'>
//                 <h3>{recipe.createdDb ? null : recipe.dishTypes.join(', ')}</h3>
//                 {recipe.createdDb ?
//                     <h2>{recipe.diets.map(r => r.name).join(', ')}</h2> :
//                     <h2>{recipe.vegetarian === true ? recipe.diets.join(', ') + ', vegetarian' : recipe.diets.join(', ')}</h2>
//                 }
//             </div>
//                 <div className='items'>
//                     {recipe.aggregateLikes !== 0 ? 
//                         <h3>Punctuation: {recipe.aggregateLikes}</h3> : 
//                         <h3>Punctuation: -</h3>
//                     }
//                     {recipe.healthScore !== 0 ? 
//                         <h3>Health Score: {recipe.healthScore}</h3> : 
//                         <h3>Health Score: -</h3>
//                     }
//                     <h3>Summary:</h3>
//                     <p>{recipe.summary.replace(/<[^>]*>?/g, '')}</p>
//                     {recipe.analyzedInstructions ? 
//                         <h3>Step by step instructions: </h3> : 
//                         <h3>Step by step instructions: - </h3>
//                     }
//                     { recipe.analyzedInstructions.length > 0 ?
//                         <ul>{recipe.createdDb ? 
//                             <li>{recipe.analyzedInstructions}</li> :
//                             recipe.analyzedInstructions[0].steps.map((p) => <li key={p.number}>{p.step}</li>)}
//                         </ul> : <p></p>
//                     }
//                 </div>
//             </div> : <p>Loading..</p>

//         }
//     </div>
// )
// }



