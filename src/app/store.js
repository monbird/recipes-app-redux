import { configureStore } from '@reduxjs/toolkit';
// import { createStore, combineReducers } from 'redux'; // not used anymore
// import { favoriteRecipesReducer } from '../features/favoriteRecipes/favoriteRecipesSlice.js'; // <-- named export, not anymore
import favoriteRecipesReducer from '../features/favoriteRecipes/favoriteRecipesSlice.js';
// import { searchTermReducer } from '../features/searchTerm/searchTermSlice.js';
import searchTermReducer from '../features/searchTerm/searchTermSlice.js';
// import { allRecipesReducer } from '../features/allRecipes/allRecipesSlice.js';
import allRecipesReducer from '../features/allRecipes/allRecipesSlice.js';

// export const store = createStore(
//     combineReducers({
//         favoriteRecipes: favoriteRecipesReducer,
//         searchTerm: searchTermReducer,
//         allRecipes: allRecipesReducer,
//     })
// );

export default configureStore({
    reducer: {
        favoriteRecipes: favoriteRecipesReducer,
        searchTerm: searchTermReducer,
        allRecipes: allRecipesReducer,
    },
});
