/* eslint-disable react-hooks/exhaustive-deps */

import React from 'react';
import './Detail.css';
import { Link } from 'react-router-dom';
import { useState , useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import '../carpeta.css';

export default function Detail(props) {

    const { id } = useParams();
  //Establecer un estado (variable , funcion seteadora)
    const [recipe , setRecipe] = useState({id: id , title: '' , diets: [] , image: '' , dishTypes: [] , summary: '', healthScore: '' , steps: '', analizedInstructions: ''});

    useEffect(() => {
        axios.get(`/food/recipes/${id}`).then(res => {    
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
    }, []);


    return (
    <div className='container'>
            <div className='buttonHome' >
            <Link to='/Home' className='btn'>◀ Back to Home</Link>
            </div>
        <article className='detailContainer'>
            <div className="card-header">
                <img src={recipe.image} alt="" className="detailPicture"/>
                <h2>{recipe.title}</h2>
            </div>

            <div className="card-info">
                <div className="type-diet">
                    <h3>TypeDiets</h3>
                    <ul className="grid-list">
                        {recipe.diets.map( (type , index=0) => {
                            return <li key={index}>{type}</li>
                        })}
                    </ul>
                </div>

                <div className="dish-types">
                    <h3>DishTypes:</h3>
                    <ul className="grid-list">
                        {recipe.dishTypes.map( (type , index=0) => {
                            return <li key={index}>{type}</li>
                        })}
                    </ul>
                </div>

                <h3>HealthScore <span>{recipe.healthScore}</span></h3>
                <h3>AggregateLikes <span>{recipe.aggregateLikes}</span></h3>
            </div>

           <hr className="line" />

           <div className="card-description">
                <h3>Summary:</h3>
                <p>{recipe.summary}</p>

                <h3>Instructions:</h3>
                <p>{recipe.steps}</p>
           </div>

        </article>
    </div>
)
}


