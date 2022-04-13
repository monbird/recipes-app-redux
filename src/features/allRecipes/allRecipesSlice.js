import { createSlice } from '@reduxjs/toolkit';
import { selectSearchTerm } from '../searchTerm/searchTermSlice.js';
// import allRecipesData from '../../data.js';

// Slice Object
///////////////////////////////////////
const allRecipesSlice = createSlice({
    name: 'allRecipes',
    initialState: [],
    reducers: {
        loadData: (state, action) => {
            return action.payload;
        },
        addRecipe: (state, action) => {
            return [...state, action.payload];
        },
        removeRecipe: (state, action) => {
            return state.filter((recipe) => recipe.id !== action.payload.id);
        },
    },
});

// OLD REDUCER
// const initialState = [];
// export const allRecipesReducer = (allRecipes = initialState, action) => {
//     switch (action.type) {
//         case 'allRecipes/loadData':
//             return action.payload;
//         case 'favoriteRecipes/addRecipe':
//             return allRecipes.filter(
//                 (recipe) => recipe.id !== action.payload.id
//             );
//         case 'favoriteRecipes/removeRecipe':
//             return [...allRecipes, action.payload];
//         default:
//             return allRecipes;
//     }
// };

// OLD ACTION CREATOR
// export const loadData = () => {
//     return {
//         type: 'allRecipes/loadData',
//         payload: allRecipesData,
//     };
// };

// Selectors
///////////////////////////////////////
export const selectAllRecipes = (state) => state.allRecipes;

export const selectFilteredAllRecipes = (state) => {
    const allRecipes = selectAllRecipes(state);
    const searchTerm = selectSearchTerm(state);

    return allRecipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
};

// Exports
///////////////////////////////////////
export const { loadData, addRecipe, removeRecipe } = allRecipesSlice.actions;

export default allRecipesSlice.reducer;
