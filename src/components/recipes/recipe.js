import React from 'react';
import '../../assets/stylesheets/components/recipes/recipe.css';
import placeholder from '../../assets/images/placeholder.png';

const Recipe = ({ recipe }) => {
  return (
    <a className="recipe" href={ recipe.href } target="_blank">
      <div className="title">
        { recipe.title }
      </div>

      <img src={ recipe.thumbnail || placeholder }
           alt={ recipe.title }/>
    </a>
  );
};

export default Recipe;
