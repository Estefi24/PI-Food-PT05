import React from 'react'
import {Link}from 'react-router-dom'
import './LandingPage.css'

export default function LandingPage(){
    return(
    <div className='vista'>
    <h1>W E L C O M E !!!</h1>
    <h2> API FOOD </h2>
    <Link to='/home'><button>CLICK HERE</button></Link>
    </div>
	)
}

