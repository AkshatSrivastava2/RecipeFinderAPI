import React,{ Component } from 'react';
import SearchRecipes from './SearchRecipes';
import '../styles/App.css';
import RecipeList from './RecipeList';

class App extends Component{
    render(){
        return(
            <div>
                <h2>Recipe Finder</h2>
                <SearchRecipes />
                <RecipeList />
            </div>
        )
    }
}
export default App;