import React, { useEffect, useState } from 'react';
import Recipe from './components/Recipe';
import './App.css';
import {v4 as uuidv4} from 'uuid';


const App = () => {

const APP_ID = "ff7b8082";
const APP_KEY = "8172cabd6aeca2059a6f75c3ad6c2f05";

const [recipes, setRecipes] = useState([]);
const [search, setSearch] = useState("")
const [query, setQuery] = useState('chicken');

useEffect(() => {
  getRecipes();
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [query]);

const getRecipes = async () => {
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data = await response.json();
  setRecipes(data.hits);
  console.log(data.hits);
}

const updateSearch = (e) => {
  setSearch(e.target.value);
};

const getSearch = e => {
  e.preventDefault();
  setQuery(search);
  setSearch('');
}

  return(
    <div className="App">
        <div className="app-label">My Recipes Search</div>
        <form onSubmit={getSearch} className="search-form">
          <input className="search-bar" type="text" value={search} onChange={updateSearch} />
          <button className="search-button" type="submit">
             Search
          </button>
        </form>
        
        <div className="recipes">
          {recipes.map(recipe =>(
            <Recipe 
                key={uuidv4()}
                title={recipe.recipe.label} 
                calories={recipe.recipe.calories} 
                image={recipe.recipe.image} 
                ingredients={recipe.recipe.ingredients}
                weight={recipe.recipe.totalWeight}
            />
          ))};
        </div>
    </div>
  ); 
}

export default App;

	