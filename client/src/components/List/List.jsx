/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState , useEffect } from 'react';

import {useDispatch, useSelector} from 'react-redux';

import { addSearch } from '../../actions';
import Resultado from '../Resultado/Resultado';
import Paginado from '../Paginado/Paginado';
import img from '../../img/error.jpg'
import '../carpeta.css';


export function List() {
    const [recipes, setRecipes] = useState();
    const dispatch = useDispatch();
    const allRecipes = useSelector( (state) =>  state.recipes  );
    const [currentPage , setCurrentPage] = useState(1);
    const [recipesPerPage , setRecipesPerPage] = useState(9);
    const indexOfLastOfRecipe = currentPage * recipesPerPage;
    const indexOfFirstOfRecipe = indexOfLastOfRecipe - recipesPerPage;
    const currentRecipes  = allRecipes.slice(indexOfFirstOfRecipe , indexOfLastOfRecipe);

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber);
    }
    
	const previous = function (setActive) {
        if(currentPage > 1){
        setCurrentPage(currentPage - 1);
        setActive(currentPage - 1)
        }  
	};

    const next = function (setActive, allPage) {
        if(currentPage < allPage) {
        setCurrentPage(currentPage + 1);
        setActive(currentPage + 1)
        }
	};


    useEffect(() => {
        dispatch(addSearch())      
    }, []);

    return (
            <div className= 'container-pagination' >
                <div className= 'container-cards'>
                {currentRecipes.length ? currentRecipes?.map(recipe => {
                    return (
                        <Resultado
                        key={recipe.id}
                        title={recipe.title}
                        image={recipe.image}
                        diets={recipe.diets}
                        // healthScore={recipe.healthScore}
                        id={recipe.id}></Resultado>                        
                    )                   
                }) :
                <img width={450} src={img} alt="not found" />
                }
                </div>
                {currentRecipes.length ? 
                <Paginado
                    recipesPerPage={recipesPerPage}
                    allRecipes={allRecipes.length}
                    paginado={paginado}
                    previous={previous}
                    next={next}>
                </Paginado> :
                <div></div>
                }
                </div>

            )
}

export default List;
