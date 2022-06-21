/* eslint-disable no-self-assign */
import axios from  'axios';

export function addSearch(search){

  

  return function(dispatch) {

    return axios.get('/food/recipes').then(res => {

      let recipesReturn = [];


   //Filtros
    if(search){
    if(search.search.length !== 0){
      recipesReturn = res.data.filter(result => result.title.toLowerCase().includes(search.search.toLowerCase()));
    } else{
      recipesReturn = res.data;
    }

    //Si es distinto a all , filtra por dieta
    if(search.typeDiet !== 'all'){
      recipesReturn = recipesReturn.filter( result => result.diets.includes(search.typeDiet) );
    }else{
      recipesReturn = recipesReturn;
    }
    
    //------------------------------------------------------------------
    if(search.orderByAlphabetical !== 'none'){
      if(search.orderByAlphabetical === 'ascend'){
        recipesReturn = recipesReturn.sort((a, b) => a.title.localeCompare(b.title));
      }else{
            recipesReturn = recipesReturn.sort((a, b) => b.title.localeCompare(a.title));
          }
        }

    //------------------------------------------------------------------
    if(search.orderByhealthScore !== 'none'){
      if( search.orderByhealthScore === 'min' ){
        recipesReturn.sort(function (a, b) {
          if ( a.healthScore > b.healthScore ) {
            return 1;
          }
          if (a.healthScore < b.healthScore) {
            return -1;
          }
          // a must be equal to b
          return 0;
        })

      }else if( search.orderByhealthScore === 'max' ){
        recipesReturn.sort(function (a, b) {
          if (a.healthScore < b.healthScore) {
            return 1;
          }
          if (a.healthScore > b.healthScore) {
            return -1;
          }
          // a must be equal to b
          return 0;
        })
      }
  }
  }else{
    recipesReturn = res.data;
  }

  //Distpatch
  dispatch({ type: "SEARCH", payload:  recipesReturn});
  })

  }

}