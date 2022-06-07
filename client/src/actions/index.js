import axios from 'axios';

export function addSearch( search ) {
    return function(dispatch) {

  return axios.get('/food/recipes').then(res => {
    console.log(Array.isArray(res.data));
    let recipesReturn = [];

  //Aqui iran los filtros
  console.log(search.search);
    if(search.search.lenght !== 0){
        recipesReturn = res.data.filter(result => result.title.toLowerCase().includes(search.search.toLowerCase()));

    }else{
      recipesReturn = res.data;

    }

    if(search.typeDiet !== 'all'){
      recipesReturn = recipesReturn.filter(result => result.diets.includes(search.typeDiet));

    }

  if(search.order === 'asc'){
    recipesReturn.sort(function(a,b){
      if(a.title > b.title){
        return 1;
      }
      if(a.title < b.title){
        return -1;
      }
      return 0;
    });
    }else if (search.order === 'desc'){ 
      recipesReturn.sort(function(a,b){
        if(a.title > b.title){
          return -1;
        }
        if(a.title < b.title){
          return 1;
        }
        return 0;
      });

      if(search.orderBy === 'max'){
        recipesReturn.sort(function(a,b){
          if(a.title > b.title){
            return 1;
          }
          if(a.title < b.title){
            return -1;
          }
          return 0;
        });

        if(search.orderBy === 'min'){
          recipesReturn.sort(function(a,b){
            if(a.aggregateLikes < b.aggregateLikes){
              return 1;
            }
            if(a.aggregateLikes > b.aggregateLikes){
              return -1;
            }
            return 0;
          });
        }
      }
    }

  //Aqui haremos el dispatch
    dispatch({ type: "SEARCH", payload: recipesReturn });
  
  
  });
  };

  }

