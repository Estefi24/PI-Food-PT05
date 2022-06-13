import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
// import RecipeCreate from '../RecipeCreate/RecipeCreate';
import { Link } from 'react-router-dom';
import List from '../List/List';
// import Paginado from '../Paginado/Paginado';
// import Card from '../Card/Card';
import './Home.css';


class Home extends React.Component {
    
render(){
    return (
        // <div className='homeContainer'>
        //     <h1>Food Recipes</h1>    
        //     <SearchBar />
        // <div className='home'>
        //     <Link to='/recipe' className='created'><button>Create Recipe</button></Link>
        //     <List></List>
        //     <Paginado></Paginado>
        // </div> 
        // </div>   
        <>
            <section className="header-recipes">
                <h1>Food Recipes</h1>    
                <SearchBar />
                <Link to='/recipe' className='created'><button>Create Recipe</button></Link>
            </section>  
            <section className="recipes-list">
                <List></List>
            </section>    
        </>  
        )
    }
}

export default Home;