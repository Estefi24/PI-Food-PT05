import React from 'react';
import './SearchBar.css';

export default function SearchBar() {

    return(
    <div className='searchContainer padding-top-box'>
        <div className='searchContainerRow'>
            <select name='typeDiet' id='typeDiet' className='searchFormSelect' defaultValue={'None'}>
                <option value=''>Total Recipes</option>
                <option value=''>Recipes Created</option>
                <option value=''>Recipes Api</option>
            </select>
            <select name='typeDiet' id='typeDiet' className='searchFormSelect' defaultValue={'None'}>
                <option value=''>Types</option>
                <option value=''>gluten free</option>
                <option value=''>dairy free</option>
                <option value=''>lacto ovo vegetarian</option>
                <option value=''>vegan</option>
                <option value=''>paleolithic</option>
                <option value=''>primal</option>
                <option value=''>whole 30</option>
                <option value=''>pescatarian</option>
                <option value=''>ketogenic</option>
                <option value=''>fodmap friendly</option>
            </select>
            <select name='typeDiet' id='typeDiet' className='searchFormSelect' defaultValue={'None'}>
                <option value=''>Alphabetical Order</option>
                <option value=''>Asc</option>
                <option value=''>Desc</option>
            </select>
            <select name='typeDiet' id='typeDiet' className='searchFormSelect' defaultValue={'None'}>
                <option value=''>Score</option>
                <option value=''>Max Score</option>
                <option value=''>Min Score</option>
            </select>
        </div>
        <div className='searchContainerRow'>
            <input type='text' className='searchFormInput' placeholder='Search by recipe name' />
            <input type='submit' value='Search' className='searchFormSubmit' />
        </div>
    </div>
    )  
}
