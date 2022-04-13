import { createSlice } from '@reduxjs/toolkit';
import { selectSearchTerm } from '../searchTerm/searchTermSlice.js';

// Slice Object
///////////////////////////////////////
const favoriteRecipesSlice = createSlice({
    name: 'favoriteRecipes',
    initialState: [],
    reducers: {
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
// export const favoriteRecipesReducer = (
//     favoriteRecipes = initialState,
//     action
// ) => {
//     switch (action.type) {
//         case 'favoriteRecipes/addRecipe':
//             return [...favoriteRecipes, action.payload];
//         case 'favoriteRecipes/removeRecipe':
//             return favoriteRecipes.filter(
//                 (recipe) => recipe.id !== action.payload.id
//             );
//         default:
//             return favoriteRecipes;
//     }
// };

// OLD ACTION CREATORS
// export function addRecipe(recipe) {
//     return {
//         type: 'favoriteRecipes/addRecipe',
//         payload: recipe,
//     };
// }

// export function removeRecipe(recipe) {
//     return {
//         type: 'favoriteRecipes/removeRecipe',
//         payload: recipe,
//     };
// }

// Selectors
///////////////////////////////////////
export const selectFavoriteRecipes = (state) => state.favoriteRecipes;

export const selectFilteredFavoriteRecipes = (state) => {
    const favoriteRecipes = selectFavoriteRecipes(state);
    const searchTerm = selectSearchTerm(state);

    return favoriteRecipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
};

// Exports
///////////////////////////////////////
export const { addRecipe, removeRecipe } = favoriteRecipesSlice.actions;

export default favoriteRecipesSlice.reducer;
