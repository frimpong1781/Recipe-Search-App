import React from 'react';
import style from '../recipe.module.css';

const Recipe = ({title, calories, image, ingredients, weight}) => {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <img className={style.image} src={image} alt="" />
            <ol>
                <h3>Ingredients</h3>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}<hr /></li>
                   
                ))}
            </ol>
            <p><strong>Calories: </strong>{calories} <strong>Total Weight: </strong> {weight}</p>
           
        </div>
    );
};

export default Recipe;