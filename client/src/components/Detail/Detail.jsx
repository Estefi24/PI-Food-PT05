/* eslint-disable react-hooks/exhaustive-deps */

import React from 'react';
import './Detail.css';
import { Link } from 'react-router-dom';
import { useState , useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

export default function Detail(props) {

    const { id } = useParams();
  //Establecer un estado (variable , funcion seteadora)
    const [recipe , setRecipe] = useState({id: id , title: '' , diets: [] , image: '' , dishTypes: [] , summary: '', healtScore: '' , steps: '', analizedInstructions: ''});

    useEffect(() => {
        axios.get(`/food/recipes/${id}`).then(res => {
    console.log('estoy en detail')
            console.log(res.data)
    
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
                    analizedInstructions: res.data[0].analizedInstructions,
                    steps: res.data[0].steps

                }
            )
        }
        )
    }, []);

    if (id.length === 36) {
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
                return <span key={index}> | {type.name}</span>
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
            <p>{recipe.summary}</p>
            <h3>Instructions:</h3>
            <p>{recipe.analizedInstructions}</p>
        </div>
        </div>
        )
    }

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
        </div>
    </div>
)
}


