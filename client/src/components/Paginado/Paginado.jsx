// import React from 'react';
// import './Paginado.css'

// export default function Paginado({ recipes, recipesPerPage, paginado }) {
//     const pageNumbers = []

//     for (let i = 0; i <= Math.ceil(recipes / recipesPerPage); i++) {
//         pageNumbers.push(i+1)
//     }

//     return (
//         <nav className='button'>
//             {pageNumbers && pageNumbers.map(number => (
//                     <button key={number} onClick={() => paginado(number)}>{number}</button>
//                 ))}
            
//         </nav>
//     )
// }