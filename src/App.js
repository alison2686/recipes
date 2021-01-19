import React, { Component } from 'react';
import './Recipes.css';
import Recipe from './components/Recipe';
import Navigation from './components/Navigation';

class App extends Component {
  constructor(props) {
    super(props);
    this.selectNewRecipe = this.selectNewRecipe.bind(this);
    this.state = {
      recipes: [
        {
          title: 'Thanksgiving Dinner Rolls',
          ingredients: [
            '2 pkg. dried yeast',
            '1/2 C. warm water',
            '4 1/2 C. flour; divided',
            '1/4 C. sugar',
            '1 tsp. salt',
            '1 C. butter, melted & cooled; divided',
            '1 egg',
            '1 C. warm milk'
          ],
          steps: [
            'Dissolve 2 pkg yeast in 1/2 C. warm water. Let stand until bubbly (5-10 min.)',
            'Stir 2 C. flour, sugar, and salt. Add 6 T. melted butter, egg, yeast mixture, and milk',
            'Beat 5 minutes. Gradually mix in reamining 2 1/2 C. flour',
            'Cover and let rise 45 minutes or until dough has doubled in size',
            'Pour half of remaining butter in a 9" x 13" pan',
            'Beat batter down. Drop by spoonful onto pan (12-16 rolls). Drizzle with butter',
            'Cover and let rise 30 min or until doubled in size.',
            'Bake 12-17 min. at 425 degrees',
            'To make ahead cover the rolls and refrigerate until 20 min before serving, then bake'
          ],
          id: 'rolls'
        },
        {
          title: 'Ceasar Salad',
          ingredients: [
            'Romaine lettuce',
            'Croutons',
            '1/4 C. olive oil',
            '1/4 C. parmesan cheese',
            '1 T. lemon juice',
            '1 t. dijon mustard',
            '1 tin anchovies',
            '2 garlic cloves',
            '1 egg (coddled)',
            'salt',
            'pepper'
          ],
          steps: [
            'To make dressing combine parmesan, mustard, lemon juice, garlic, 2-3 anchovies, and egg in blender. Mix to combine',
            'With blender on slowly pour olive oil to emulsify',
            'Add salt and pepper to taste'
          ],
          id: 'ceasar'
        },
      ],
      selectedRecipe: null
    }
  }

  selectNewRecipe(recipeId) {
    if(recipeId) {
      this.setState({
        ...this.state,
        selectedRecipe: recipeId
      });
    }
  }
  
  render() {
    let recipeToSelect;
    if(this.state.selectedRecipe) { 
      const filteredRecipes = this.state.recipes.filter((recipe) => recipe.id === this.state.selectedRecipe);  
      if(filteredRecipes.length > 0) { 
        recipeToSelect = filteredRecipes[0];
      }
    }
    return (
      <div className="App">
        <aside className='sidebar'>
          <h1 className='sidebar__title'>Recipe Book</h1>
          <Navigation 
            recipes={this.state.recipes}
            activeRecipe={this.state.selectedRecipe}
            recipeToSelect={this.selectNewRecipe}
          />
        </aside>
        {
          recipeToSelect ? 
            <Recipe
            ingredients={recipeToSelect.ingredients}
            steps={recipeToSelect.steps}
            title={recipeToSelect.title}
            />
            :
            null
        }
      </div>
    );
  }

  componentDidMount() {
    const recipeToShow = this.state.recipes[0].id || null;
    this.setState({
      ...this.state,
      selectedRecipe: recipeToShow
    });
  }
}

export default App;

