import React, { Component } from 'react';
import {connect} from 'react-redux';
import{ addSearch } from '../../actions/index';
import '../carpeta.css';
import { Link } from 'react-router-dom';

export class SearchBar extends Component{

    constructor (props){
        super(props);

        this.state = {
            search: '',
            typeDiet: 'all',
            orderByAlphabetical: 'none',
            orderByhealthScore: 'none',

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.viewAllRecipes = this.viewAllRecipes.bind(this);
        this.listRef = React.createRef()
    
    }

    viewAllRecipes(e) {
        e.preventDefault()
        this.props.addSearch(
            {
            search:'',
            typeDiet:'all' , 
            orderByAlphabetical:'none',
            orderByhealthScore: 'none'
            }
        );
    }


    handleChange(event){
        event.preventDefault()
        this.props.addSearch({...this.state, [event.target.name]: event.target.value});
        this.setState({...this.state, [event.target.name]: event.target.value});
    }

    handleSubmit(event){
        event.preventDefault(); 
      this.props.addSearch(
            {
            search:this.state.search ,
            typeDiet:this.state.typeDiet , 
            orderByAlphabetical: this.state.orderByAlphabetical,
            orderByhealthScore: this.state.orderByhealthScore
            }
        );

    }


    render(){
        return(
            <>
            
            <form onSubmit={this.handleSubmit}>
                <div className='filter-row-search'>
                    <input type='text' name='search' onChange={this.handleChange} value= {this.state.search} placeholder='Search recipe by name' />
                    <button type='submit' className="btn btn-search">
                        <svg viewBox="0 0 1024 1024">
                            <path class="path1"
                            d="M848.471 928l-263.059-263.059c-48.941 36.706-110.118 55.059-177.412 55.059-171.294 0-312-140.706-312-312s140.706-312 312-312c171.294 0 312 140.706 312 312 0 67.294-24.471 128.471-55.059 177.412l263.059 263.059-79.529 79.529zM189.623 408.078c0 121.364 97.091 218.455 218.455 218.455s218.455-97.091 218.455-218.455c0-121.364-103.159-218.455-218.455-218.455-121.364 0-218.455 97.091-218.455 218.455z">
                            </path>
                        </svg>
                    </button>
                </div>
                <div className='filter-row-sort'>
                    <select name='typeDiet' id='typeDiet' onChange={this.handleChange} value= {this.state.typeDiet} >
                        <option value='all'>All Diets</option>
                        <option value='gluten free'>gluten free</option>
                        <option value='dairy free'>dairy free</option>
                        <option value='lacto ovo vegetarian'>lacto ovo vegetarian</option>
                        <option value='vegan'>vegan</option>
                        <option value='paleolithic'>paleolithic</option>
                        <option value='primal'>primal</option>
                        <option value='whole 30'>whole 30</option>
                        <option value='pescatarian'>pescatarian</option>
                        <option value='ketogenic'>ketogenic</option>
                        <option value='fodmap friendly'>fodmap friendly</option>
                    </select>
                    <select name='orderByAlphabetical' id='orderByAlphabetical' onChange={this.handleChange} value= {this.state.orderByAlphabetical}>
                        <option value='none'>Order Alphabetical </option>
                        <option value='ascend'>Asc</option>
                        <option value='descend'>Desc</option>
                    </select>
                    <select name='orderByhealthScore' id='orderByhealthScore' onChange={this.handleChange} value= {this.state.orderByhealthScore}>
                        <option value='none'>Order by Score</option>
                        <option value='max'>Max Score</option>
                        <option value='min'>Min Score</option>
                    </select>
                </div>
            </form>
            <div>
                    <Link to='/recipes' className='create-recipe' onClick={this.viewAllRecipes}> View all recipes </Link>           
                    <Link to='/recipe' className='create-recipe'>Create Recipe</Link>
            </div>
            </>
        )
            
    }
}

function mapStateToProps(state) {
    return {
       //Asi es como queremos recibir los elementos del store
        count: state.count
    };
}

function mapDispatchToProps(dispatch) {
    return {
       //Las funcionalidades que este componente aplicaran al store
    addSearch: search => dispatch(addSearch(search))
    };
}


export default connect(
    mapStateToProps,
     mapDispatchToProps
)(SearchBar);
