/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Paginado.css'
// import '../List/List'

export default function Paginado ({recipesPerPage, allRecipes, paginado, previous, next}) {
    
    const pageNumbers = [];
        
    for (let i = 1; i <= Math.ceil(allRecipes/recipesPerPage); i++) {
        pageNumbers.push(i)
    };    
      
    return(

    <div className="paginationContainer">
        <div className="pagination">
        {/* <button id="btnPrev">Prev.</button> */}
        <a className='btn-page' onClick={() => previous()}>Prev</a>
            {pageNumbers && pageNumbers.map((number) => (
              <a onClick={() => paginado(number)} key={number} >{number}</a>
            ))}
        <a className='btn-page' onClick={() => next()}>Next</a>    
            
            {/* <button id="btnNext">Next.</button> */}
        </div>
    </div> 

        
    )
} 




        
//         <div>
            
//             {pages.length <= 1 ? 
//             <></> :
//             <nav className="pagination">
                
//                 <ul className="pages">
//                     {pages?.map(p =>(
//                         <li className="page" key={p}>
//                             <button className="pageBtn" onClick={() => paged(p)} style={{width:"30px"}}>{p}</button>
//                         </li>
//                     ))}
//                 </ul>
    
//             </nav>
//             }  

//         </div>
//     )
// };


// export default function Paginado{
//     return(
//         <div className='paginationContainer'>
//             <div className='pagination'>
//                 <a href='#' className='paginationButton'>Previous</a>
//                 <a href='#' className='paginationButton'>1</a>
//                 <a href='#' className='paginationButton'>2</a>
//                 <a href='#' className='paginationButton'>3</a>
//                 <a href='#' className='paginationButton'>Next</a>
//             </div>
//         </div>
//     )
// }