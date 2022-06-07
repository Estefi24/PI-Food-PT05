import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import RecipeCreate from '../RecipeCreate/RecipeCreate';
import List from '../List/List';
import Paginado from '../Paginado/Paginado';
import Card from '../Card/Card';
import './Home.css';


class Home extends React.Component {
    
render(){
    return (
        <div className='homeContainer'>
            <SearchBar></SearchBar>
            <List></List>
            <RecipeCreate></RecipeCreate>
            <Paginado></Paginado>
            <Card></Card>
        </div>     
        )
    }
}

export default Home;