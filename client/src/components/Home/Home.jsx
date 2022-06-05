import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import RecipeCreate from '../RecipeCreate/RecipeCreate';
import List from '../List/List';
import './Home.css';


class Home extends React.Component {
render(){
    return (
        <div className='homeContainer'>
            <SearchBar></SearchBar>
            <List></List>
            <RecipeCreate></RecipeCreate>
        </div>     
        )
    }
}

export default Home;