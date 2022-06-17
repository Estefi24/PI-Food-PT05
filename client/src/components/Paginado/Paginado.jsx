/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Paginado.css'


export default function Paginado ({recipesPerPage, allRecipes, paginado, previous, next}) {
    
    const pageNumbers = [];
        
    for (let i = 1; i <= Math.ceil(allRecipes/recipesPerPage); i++) {
        pageNumbers.push(i)
    };    
      
    return(

    <div className="paginationContainer">
        <div className="pagination">
        <a className='btn-page' onClick={() => previous()}>Prev</a>
            {pageNumbers && pageNumbers.map((number) => (
              <a onClick={() => paginado(number)} key={number} >{number}</a>
            ))}
        <a className='btn-page' onClick={() => next()}>Next</a> 
        </div>
    </div> 
    )
}

