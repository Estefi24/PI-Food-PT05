/* eslint-disable no-self-assign */
import axios from  'axios';


export function addSearch(search){

  return function(dispatch) {

    return axios.get('/food/recipes').then(res => {

      let recipesReturn = [];


    if(search){
    if(search.search.length !== 0){
      recipesReturn = res.data.filter(result => result.title.toLowerCase().includes(search.search.toLowerCase()));
    } else{
      recipesReturn = res.data;
    }

      
      if(search.orderByRecipe !== 'all'){
        if(search.orderByRecipe === 'api') {
          recipesReturn = recipesReturn.filter(r => !r.createdDb)
        }else{  recipesReturn = recipesReturn.filter(r => r.createdDb)  
        //   recipesReturn = recipesReturn.filter(r => r.id.toString().length === 6)
        // }else{
        //   recipesReturn = recipesReturn.filter(r => r.id.toString().length === 36)
        }
      }else {
        recipesReturn= recipesReturn;
      }

    
    if(search.typeDiet !== 'all'){
      recipesReturn = recipesReturn.filter( result => result.diets.includes(search.typeDiet) );
    }else{
      recipesReturn = recipesReturn;
    }


    if(search.orderByAlphabetical !== 'none'){
      if(search.orderByAlphabetical === 'ascend'){
        recipesReturn = recipesReturn.sort((a, b) => a.title.localeCompare(b.title));
      }else{
            recipesReturn = recipesReturn.sort((a, b) => b.title.localeCompare(a.title));
          }
        }


    if(search.orderByhealthScore !== 'none'){
      if( search.orderByhealthScore === 'min' ){
        recipesReturn.sort(function (a, b) {
          if ( a.healthScore > b.healthScore ) {
            return 1;
          }
          if (a.healthScore < b.healthScore) {
            return -1;
          }
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
          return 0;
        })
      }
  }
  }else{
    recipesReturn = res.data;
  }


  dispatch({ type: "SEARCH", payload:  recipesReturn});
  })

  }

}