import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import List from '../List/List';
import './Home.css';
import '../carpeta.css';



class Home extends React.Component {

render(){
    return (    
        <>

            <div>
                <section className="filter-recipes">
                    <div className= 'container'>
                        <h1>Food Recipes</h1>    
                        <SearchBar />
                    </div>
                </section>  
                <section className="recipes-list">
                    <div className="container">
                        <List></List>
                    </div>
                </section>    
            </div>


        </>  
        )
    }
}

export default Home;