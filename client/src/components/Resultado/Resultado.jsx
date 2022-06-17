import React, { useEffect } from 'react';
//Importar link
import { Link } from "react-router-dom";


export function Resultado(props) {

    useEffect(() => {               
    }, []);



    return (
        
            <div className="resultContainer" key={props.id}>
            <div className="resultPictureContainer">
            <img src={props.image} alt="" className="resultPicture"/>
            </div>
            <div className="resultDescriptionContainer">
                <Link to={`/detail/${props.id}`} className="resultTitle"><h1>{props.title}</h1> <h3>{props.diets?.join(', ')}</h3> </Link>
            </div>
            </div> 
    )
};



export default Resultado;

