import React from 'react';
// import axios from 'axios';
// import './List.css';

class List extends React.Component {
    constructor(props) {
    super(props);
        this.state = {recipes: {results: []}}
        this.ListRef = React.createRef()
}

// componentDidMount() {
//     axios.get('/food/recipes').then(res => this.setState({recipes: res.data}));
// }

    render() {
        return (
            <div className='listContainer'>
                {
                this.state.recipes.results.map(recipe => {
                    return (
                        <div className='resultContainer' key={recipe.id}>
                        <div className='resultPictureContainer'>
                        <img className='resultPicture' src={recipe.image} alt="" />
                        </div>
                        <div className='resultInfoContainer'>
                        <a href className="resultTitle"><h1>{recipe.title}</h1></a>
                        <span>Type of Diet</span>
                        </div>
                        </div>                        
                    )
                })

    }
            </div>
            
        ) 
    }
}

// {/* <div className 'paginationContainer'>
//       <div className='pagination'>
//         <a href='#' className='paginationButton'>Previous</a>
//         <a href='#' className='paginationButton'>1</a>
//         <a href='#' className='paginationButton'>2</a>
//         <a href='#' className='paginationButton'>3</a>
//         <a href='#' className='paginationButton'>Next</a>
//       </div>
//     </div> */}


export default List;