import React, { useEffect } from 'react';
import '../carpeta.css';
//Importar link
import { Link } from "react-router-dom";


export function Resultado(props) {

    useEffect(() => {               
    }, []);



    return (
        
        <Link to={`/detail/${props.id}`} key={props.id} className="recipe-item">
            <img src={props.image} alt="" className="resultPicture"/>
            <div className="recipe-description">
                <span className="recipe-title">{props.title}</span> 
                    <p className="recipe-healthScore">Score: {props.healthScore}</p>
                            <ul className='grid-list'>{props.diets?.map((type , index=0) => {
                            return <li key={index}>{type}</li>
                        })}</ul>
            </div>
        </Link>

    )
};



export default Resultado;

