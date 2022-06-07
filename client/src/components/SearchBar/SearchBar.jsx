import React, { Component } from 'react';
import './SearchBar.css';
// eslint-disable-next-line no-unused-vars
import store from '../../store/index';
import {connect} from 'react-redux';
import{ addSearch } from '../../actions/index';

export class SearchBar extends Component{

    constructor (props){
        super(props);

        this.state = {
            search: '',
            // orderRecipe:'rice',
            typeDiet:'all',
            orderBy:'score',
            order: 'alpha'

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.listRef = React.createRef()
    
    }

    handleChange(event){
        this.setState({[event.target.name]: event.target.value});
    };

    handleSubmit(event){
        event.preventDefault();
        this.props.addSearch(
            {
            search: this.state.search, 
            order: this.state.order, 
            orderBy: this.state.orderBy, 
            // orderRecipe: this.state.orderRecipe, 
            typeDiet: this.state.typeDiet
        }
        );
    }


    render(){
        // eslint-disable-next-line no-unused-vars
        // const {search} = this.state;
        return(
            <form onSubmit={this.handleSubmit}>
            <div className='searchContainer padding-top-box'>
                <div className='searchContainerRow'>
                    {/* <select name='orderRecipe' id='orderRecipe' onChange={this.handleChange} value= {this.state.orderRecipe} className='searchFormSelect' defaultValue={'None'}>
                        <option value={'total'}>Total Recipes</option>
                        <option value={'rice'}>Recipes Created</option>
                        <option value={'rice'}>Recipes Api</option>
                    </select> */}
                    <select name='typeDiet' id='typeDiet' onChange={this.handleChange} value= {this.state.typeDiet} className='searchFormSelect' defaultValue={'None'}>
                        <option value={'all'}>All</option>
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
                    <select name='order' id='order' onChange={this.handleChange} value= {this.state.order} className='searchFormSelect' defaultValue={'None'}>
                        <option value={'alpha'}>Alphabetical Order</option>
                        <option value={'asc'}>Asc</option>
                        <option value={'desc'}>Desc</option>
                    </select>
                    <select name='orderBy' id='orderBy' onChange={this.handleChange} value= {this.state.orderBy} className='searchFormSelect' defaultValue={'None'}>
                        <option value={'score'}>Score</option>
                        <option value={'max'}>Max Score</option>
                        <option value={'min'}>Min Score</option>
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




// export default SearchBar;