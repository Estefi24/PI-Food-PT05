/* eslint-disable no-unused-vars */
/* eslint-disable no-unreachable */
/* eslint-disable no-lone-blocks */
//Importar las actions
import { addSearch } from "../actions/index";

//InitialState contiene las mismas propiedades que el store
const initialState = {
    recipes: {}
};

function rootReducer(state = initialState, action) {

//Verifaceremos segun el type cada una de las actions
        switch(action.type){
        case 'SEARCH': {
//Cambiamos las propiedades del stado
            console.log(action.payload)
            return {...state, recipes: action.payload}
        }break;
        default: {
            return state;
        }
        // case 'ORDERRECIPE': {  
        //     return {...state, recipes: action.payload}
        // }break;
        // case 'ORDER' : {
        //     return {...state, recipes: action.payload}
        // }break;
        // case 'ORDERBY': {
        //     return {...state, recipes: action.payload}
        // }break;
        // case 'TYPEDIET': {
        //     return {...state, recipes: action.payload}
        // }break;
    }
    
    }

export default rootReducer;
