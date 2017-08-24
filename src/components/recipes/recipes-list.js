import React from 'react';
import '../../assets/stylesheets/components/recipes/recipes-list.css';

import Recipe from './recipe';

const RecipesList = ({ recipes }) => {
  if (!recipes) {
    return null;
  }

  return (
    <div className="recipes-list">
      { recipes.map((recipe, i) => <Recipe recipe={ recipe } key={ i } />) }
    </div>
  );
};

export default RecipesList;
