/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
//Import store
// import store from '../../store';
//Importar el connect
import {connect} from 'react-redux';
import axios from 'axios';
// import './List.css';


class List extends React.Component{

    constructor(props){
        super(props);
        this.state = {recipes: {  } }
        this.listRef = React.createRef()
    }

    
    componentWillMount(){
        axios.get('/recipes').then(res => {this.setState({recipes: res.data })});
        console.log(this.props);
        console.log('Hey estoy aca')

    }

    componentDidUpdate(){
        this.setState({ recipes: this.props.recipes });
        console.log('Hey me actualize ahora');
        console.log(this.props.recipes)
    }
    


    render(){
        // if(this.props.recipes.length === 0){
            // this.props.recipes.map(recipe => {
        
        return(
            <>
            <div className="listContainer">
                {/* {
                this.props.recipes.map(recipe => {
                return(

                <div className="resultContainer" key={recipe.id}>
                <div className="resultPictureContainer">
                <img src={recipe.image} alt="" className="resultPicture"/>
                </div>
                <div className="resultDescriptionContainer">
                    <a href="" className="resultTitle"><h1>{recipe.title}</h1></a>
                    <span>Type Of Diet</span>
                </div>
                </div>
        )
    }
    )
    }
                 */}
            </div>

            </>
        )
    }
}


function mapStateToProps(state) {
    return {
        //Asi es como queremos recibir los elementos del store
        recipes: state.recipes
    };
 }
 
 function mapDispatchToProps(dispatch) {
    return {
        //Las funcionalidades que este componente aplicaran al store
        
    };
 }



export default connect(
    mapStateToProps,
    mapDispatchToProps
 )(List);
 



//export default ListResultComponent;









 {/*******************************************************************************/
                /*Pagination
                <div className="paginationContainer">
                    <div className="pagination">
                        <a href="#">&laquo;</a>
                        <a href="#">1</a>
                        <a href="#" class="active">2</a>
                        <a href="#">3</a>
                        <a href="#">4</a>
                        <a href="#">5</a>
                        <a href="#">6</a>
                        <a href="#">&raquo;</a>
                    </div>
                </div>
                */}




// {/* <div className 'paginationContainer'>
//       <div className='pagination'>
//         <a href='#' className='paginationButton'>Previous</a>
//         <a href='#' className='paginationButton'>1</a>
//         <a href='#' className='paginationButton'>2</a>
//         <a href='#' className='paginationButton'>3</a>
//         <a href='#' className='paginationButton'>Next</a>
//       </div>
//     </div> */}