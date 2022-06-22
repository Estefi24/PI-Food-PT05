/* eslint-disable no-unreachable */
/* eslint-disable no-lone-blocks */

const initialState = {
    recipes: [{}]
};

function rootReducer(state = initialState, action) {

        switch(action.type){
        case 'SEARCH': {
            return {recipes: action.payload}
        }
        default: {
            return state;
        }
    }
    
    }

export default rootReducer;
