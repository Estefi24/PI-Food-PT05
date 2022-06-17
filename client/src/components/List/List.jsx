/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState , useEffect } from 'react';
//Importar el connect
import {connect , useDispatch, useSelector} from 'react-redux';
//Importar link
import { Link } from "react-router-dom";
import { addSearch } from '../../actions';

import Resultado from '../Resultado/Resultado';
import Paginado from '../Paginado/Paginado';


export function List(props) {
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
    
	const previous = function () {
        setCurrentPage(currentPage - 1);
	};

    const next = function () {
        setCurrentPage(currentPage + 1);
	};


    useEffect(() => {
        dispatch(addSearch())
        
    }, []);


console.log(currentRecipes)
    return (
        <div>
            <div>
                <Paginado
                recipesPerPage={recipesPerPage}
                allRecipes={allRecipes.length}
                paginado={paginado}
                previous={previous}
                next={next}>
                </Paginado>

                {currentRecipes.length ? currentRecipes?.map(recipe => {
                    return (
                        <Resultado
                        key={recipe.id}
                        title={recipe.title}
                        image={recipe.image}
                        diets={recipe.diets}
                        id={recipe.id}></Resultado>
                    )
                }) :
                <span>Recipe No Found</span>
                }
               
            </div>
        </div>
    )
};

function mapStateToProps(state) {
    console.log('Maps state to props' , state)
    return {
       //Asi es como queremos recibir los elementos del store
    recipes: state.recipes
    };
}
function mapDispatchToProps(dispatch) {
    return {
       //Las funcionalidades que este componente aplicaran al store
    };
} 


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List);
