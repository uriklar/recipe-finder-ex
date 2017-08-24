import React, { Component } from 'react';

import { API_BASE_URL, MAX_RESULTS } from '../../config/constants';
import '../../assets/stylesheets/components/recipes/recipe-finder.css';

import AutoComplete from '../common/autocomplete';
import RecipesList from './recipes-list';

export default class RecipeFinder extends Component {
  render() {
    return (
      <div className="recipe-finder">
        <AutoComplete getUrl={ this.getUrl }
                      resultsReceivedCallback={ this.onResultsReceived }/>

        <RecipesList recipes={ this.state.results } />
      </div>
    );
  }

  constructor() {
    super();

    this.state = {
      results: []
    };

    this.onResultsReceived = this.onResultsReceived.bind(this);
  }

  getUrl(query) {
    return `${API_BASE_URL}?q=${query}`;
  }

  onResultsReceived({ results }) {
    this.setState({
      results: results.slice(0, MAX_RESULTS)
    });
  }
}
