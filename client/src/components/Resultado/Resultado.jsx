// eslint-disable-next-line no-unused-vars
import React, { useState , useEffect } from 'react';

//Importar link
import { Link } from "react-router-dom";
//Importar componente del detalle
// eslint-disable-next-line no-unused-vars
import Detail from '../Detail/Detail';
// eslint-disable-next-line no-unused-vars
import RecipeCreate from '../RecipeCreate/RecipeCreate';


export function Resultado(props) {

    useEffect(() => {
        console.log('Estoy en list result')
        
    }, []);



    return (
        
            <div className="resultContainer" key={props.id}>
            <div className="resultPictureContainer">
            <img src={props.image} alt="" className="resultPicture"/>
            </div>
            <div className="resultDescriptionContainer">
                <Link to={`/detail/${props.id}`} className="resultTitle"><h1>{props.title}</h1> </Link>
            </div>
            </div> 
    )
};



export default Resultado;

