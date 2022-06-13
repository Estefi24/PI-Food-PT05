import React from 'react'
import {Link}from 'react-router-dom'
import './LandingPage.css'

export default function LandingPage(){
    return(
    <div className='vista'>
    <h1>W E L C O M E !!!</h1>
    <h2> API FOOD </h2>
    <p>This project was created as part of my fullstack developer education at <a className='href-henry' href='https://www.soyhenry.com/' target='_blank' rel='noopener noreferrer'>Henry bootcamp</a>. In order to map all the different 
       recipess food, this app consumes data from <a className='href-spoon' href='https://spoonacular.com/' target='_blank' rel='noopener noreferrer'>the food API</a>. It is also possible to create a new recipe food, entering a name, score, 
       health score and instructions on how to prepare a delicious dish.</p>
    <p>Any feedback you can provide will be greatly appreciated. Thank you, and don't forget to create your recipe food!</p>
    <Link to='/Home'><button>CLICK HERE</button></Link>
    </div>
	)
}

