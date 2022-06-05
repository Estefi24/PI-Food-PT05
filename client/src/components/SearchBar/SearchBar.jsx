import React, { Component } from 'react';
import './SearchBar.css';
// import store from '../../store/index';
// import { connect } from 'react-redux';
// import { search } from '../../actions/index';

export class SearchBar extends Component{

    constructor (){
        super();
        this.state = {
            search: '',
            orderRecipe:'',
            typeDiet:'',
            orderBy:'',
            order: ''

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    
    }

    handleChange(event){
    }

    handleSubmit(event){
        event.preventDefault();  
  //      this.props.search();  
    }


    render(){
        return(
            <form onSubmit={this.handleSubmit}>
            <div className='searchContainer padding-top-box'>
                <div className='searchContainerRow'>
                    <select name='orderRecipe' id='orderRecipe' onChange={this.handleChange} value= {this.state.orderRecipe} className='searchFormSelect' defaultValue={'None'}>
                        <option value=''>Total Recipes</option>
                        <option value=''>Recipes Created</option>
                        <option value=''>Recipes Api</option>
                    </select>
                    <select name='typeDiet' id='typeDiet' onChange={this.handleChange} value= {this.state.typeDiet} className='searchFormSelect' defaultValue={'None'}>
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
                    <select name='order' id='order' onChange={this.handleChange} value= {this.state.order} className='searchFormSelect' defaultValue={'None'}>
                        <option value=''>Alphabetical Order</option>
                        <option value=''>Asc</option>
                        <option value=''>Desc</option>
                    </select>
                    <select name='orderBy' id='orderBy' onChange={this.handleChange} value= {this.state.orderBy} className='searchFormSelect' defaultValue={'None'}>
                        <option value=''>Score</option>
                        <option value=''>Max Score</option>
                        <option value=''>Min Score</option>
                    </select>
                </div>
                <div className='searchContainerRow'>
                    <input type='text' name='search' onChange={this.handleChange} value= {this.state.search} className='searchFormInput' placeholder='Search by recipe name' />
                    <input type='submit' value='Search' className='searchFormSubmit' />
                </div>
            </div>
            </form>
        )
            
    }
}

// function mapStateToProps(state) {
//     return {
//     //Asi es como queremos recibir los elementos del store
// //    count: state.count
//     };
// }

// function mapDispatchToProps(dispatch) {
//     return {
//     //Las funcionalidades que este componente aplicaran al store
//     search: () => dispatch(search()),
//     };
// }
// export default connect(
//     // mapStateToProps,
//     //mapDispatchToProps
// )(SearchBar);



export default SearchBar;