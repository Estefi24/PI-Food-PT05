/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react';
import './Paginado.css';
import '../carpeta.css';



export default function Paginado ({recipesPerPage, allRecipes, paginado, previous, next}) {
    
    const pageNumbers = [];
    const [active, setActive] = useState(1)
    let allPage = Math.ceil(allRecipes/recipesPerPage) 

    for (let i = 1; i <= allPage; i++) {
        pageNumbers.push(i)
    };    


    return(

    <div className="pagination-container">
        <div className="pagination">
        <a href="#" className='btn-page' onClick={() => previous(setActive)}>Prev</a>
            {pageNumbers && pageNumbers.map((number) => (
        <a href='#' className= {number === active? 'active' : ''}
        
        onClick={() => {
            setActive(number)
            paginado(number)}} key={number} >{number}</a>
            ))}
        <a href='#' className='btn-page' onClick={() => next(setActive, allPage)}>Next</a> 
        </div>
    </div> 
    )
}

