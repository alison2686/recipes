import React, { Component } from 'react';

import Recipe from './components/Recipe';
import Navigation from './components/Navigation';

class App extends Component {
  constructor(props) {
    super(props);
    this.selectNewRecipe = this.selectNewRecipe.bind(this);
    this.state = {
      recipes: [
        {
          title: 'Buttery Dinner Rolls',
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
          id: 'bagel'
        },
        {
          title: 'Pizza',
          ingredients: [
            '1 Pizza Crust',
            '1 Jar of Pizza Sauce',
            '3 oz Part-Skim Mozerella Cheese'
          ],
          steps: [
            'Put sauce on crust',
            'Sprinkle mozarella cheese over sauce',
            'Bake at 350 degrees for 20 minutes'
          ],
          id: 'pizza'
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

