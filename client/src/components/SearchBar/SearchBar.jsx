import React, { Component } from 'react';
import './SearchBar.css';
import {connect} from 'react-redux';
import{ addSearch } from '../../actions/index';

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

    viewAllRecipes() {
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
        this.setState({[event.target.name]: event.target.value});
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

    // componentDidMount(){
    //     this.props.addSearch(
    //         {
    //             search: '',
    //             typeDiet: '',
    //             orderByhealthScore: '',
    //             orderByAlphabetical: ''
    //         }
    //     );
    // }


    render(){
        return(
            <>
            <button onClick={this.viewAllRecipes}> View all recipes </button>
             <form onSubmit={this.handleSubmit}>
            <div className='searchContainer padding-top-box'>
                <div className='searchContainerRow'>
                    <input type='text' name='search' onChange={this.handleChange} value= {this.state.search} className='searchFormInput' placeholder='Search by recipe name' />
                    <input type='submit' value='Search' className='searchFormSubmit' />
                </div>
                <div className='searchContainerRow'>
                    <select name='typeDiet' id='typeDiet' onChange={this.handleChange} value= {this.state.typeDiet} className='searchFormSelect' >
                        <option value={'all'}>All Recipes</option>
                        <option value={'gluten free'}>gluten free</option>
                        <option value={'dairy free'}>dairy free</option>
                        <option value={'lacto ovo vegetarian'}>lacto ovo vegetarian</option>
                        <option value={'vegan'}>vegan</option>
                        <option value={'paleolithic'}>paleolithic</option>
                        <option value={'primal'}>primal</option>
                        <option value={'whole 30'}>whole 30</option>
                        <option value={'pescatarian'}>pescatarian</option>
                        <option value={'ketogenic'}>ketogenic</option>
                        <option value={'fodmap friendly'}>fodmap friendly</option>
                    </select>
                    <select name='orderByAlphabetical' id='orderByAlphabetical' onChange={this.handleChange} value= {this.state.orderByAlphabetical} className='searchFormSelect' >
                        <option value={'none'}>Order Alphabetical </option>
                        <option value={'ascend'}>Asc</option>
                        <option value={'descend'}>Desc</option>
                    </select>
                    <select name='orderByhealthScore' id='orderByhealthScore' onChange={this.handleChange} value= {this.state.orderByhealthScore} className='searchFormSelect' >
                        <option value={'none'}>Order by Score</option>
                        <option value={'max'}>Max Score</option>
                        <option value={'min'}>Min Score</option>
                    </select>
                </div>
            </div>
            </form>
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
