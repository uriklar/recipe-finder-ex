import React, { Component } from 'react';

import Header from './components/common/header';
import RecipeFinder from './components/recipes/recipe-finder';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <RecipeFinder />
      </div>
    );
  }
}

export default App;
