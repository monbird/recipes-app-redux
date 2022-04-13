import { createSlice } from '@reduxjs/toolkit';

// Slice Object
///////////////////////////////////////
const searchTermSlice = createSlice({
    name: 'searchTerm',
    initialState: '',
    reducers: {
        setSearchTerm: (state, action) => {
            return action.payload;
        },
        clearSearchTerm: (state, action) => {
            return '';
        },
    },
});

// OLD REDUCER
// const initialState = '';
// export const searchTermReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'searchTerm/setSearchTerm':
//             return action.payload;
//         case 'searchTerm/clearSearchTerm':
//             return '';
//         default:
//             return state;
//     }
// };

// OLD ACTION CREATORS
// export function setSearchTerm(term) {
//     return {
//         type: 'searchTerm/setSearchTerm',
//         payload: term,
//     };
// }

// export function clearSearchTerm() {
//     return {
//         type: 'searchTerm/clearSearchTerm',
//     };
// }

// Selectors
///////////////////////////////////////
export const selectSearchTerm = (state) => state.searchTerm;

// Exports
///////////////////////////////////////
export const { setSearchTerm, clearSearchTerm } = searchTermSlice.actions;

export default searchTermSlice.reducer;
