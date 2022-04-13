import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addRecipe } from '../favoriteRecipes/favoriteRecipesSlice.js';
import {
    loadData,
    selectFilteredAllRecipes,
    removeRecipe,
} from './allRecipesSlice.js';
import FavoriteButton from '../../components/FavoriteButton';
import Recipe from '../../components/Recipe';

import allRecipesData from '../../data.js';

const favoriteIconURL =
    'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/favorite.svg';

export const AllRecipes = () => {
    const allRecipes = useSelector(selectFilteredAllRecipes);
    const dispatch = useDispatch();

    const onFirstRender = () => {
        dispatch(loadData(allRecipesData));
    };
    useEffect(onFirstRender, []);

    const onAddRecipeHandler = (recipe) => {
        dispatch(addRecipe(recipe));
        dispatch(removeRecipe(recipe));
    };

    return (
        <div className="recipes-container">
            {allRecipes.map((recipe) => (
                <Recipe recipe={recipe} key={recipe.id}>
                    <FavoriteButton
                        onClickHandler={() => onAddRecipeHandler(recipe)}
                        icon={favoriteIconURL}
                    >
                        Add to Favorites
                    </FavoriteButton>
                </Recipe>
            ))}
        </div>
    );
};
