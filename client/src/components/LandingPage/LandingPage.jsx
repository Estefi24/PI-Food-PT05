import React from 'react'
import {Link}from 'react-router-dom'
import './LandingPage.css'


export default function LandingPage(){
    return(
<section className='landing-section'>
        <div className="overlay">
            <div className="titles">
                <h1>WELCOME!!!</h1>
                <h2> API FOOD </h2>
            </div>

            <p className="description">
            This project was created as part of my fullstack developer education at <a className='href-henry' href='https://www.soyhenry.com/' target='_blank' rel='noopener noreferrer'>Henry bootcamp</a>. In order to map all the different 
       recipess food, this app consumes data from <a className='href-spoon' href='https://spoonacular.com/' target='_blank' rel='noopener noreferrer'>the food API</a>. It is also possible to create a new recipe food, entering a name, score, 
       health score and instructions on how to prepare a delicious dish.
            </p>

            <div className="btn-enter">
                <Link to='/Home'>Click here</Link>
            </div>
        </div>
        </section>
	)
}

