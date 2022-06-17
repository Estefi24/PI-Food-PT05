import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import List from '../List/List';
import './Home.css';


class Home extends React.Component {
    
render(){
    return (    
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