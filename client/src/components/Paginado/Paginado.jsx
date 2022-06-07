import React from 'react';
import './Paginado.css'

export default function Paged({recipesPage, allRecipes, paged}) {
    
    const pages = [];
        
    for (let i = 1; i <= Math.ceil(allRecipes/recipesPage); i++) {
        pages.push(i)
    };    
      
    return(
        
        <div>
            
            {pages.length <= 1 ? 
            <></> :
            <nav className="pagination">
                
                <ul className="pages">
                    {pages?.map(p =>(
                        <li className="page" key={p}>
                            <button className="pageBtn" onClick={() => paged(p)} style={{width:"30px"}}>{p}</button>
                        </li>
                    ))}
                </ul>
    
            </nav>
            }  

        </div>
    )
};


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

