import React, { Component } from 'react';

import '../../assets/stylesheets/components/common/autocomplete.css';

export default class AutoComplete extends Component {
  render() {
    return (
      <input className="autocomplete"
             placeholder="Search for recipe..."
             value={ this.state.query }
             onChange={ this.onInputChange } />
    );
  }

  constructor() {
    super();
    this.state = { query: '' };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({ query: event.target.value });
    this.getResults(event.target.value);
  }

  getResults(query) {
    if (query === '' || !query) {
      return this.props.resultsReceivedCallback({
        results: []
      });
    }

    const url = `https://cors-anywhere.herokuapp.com/${this.props.getUrl(query)}`;

    this.props.resultsPendingCallback();

    fetch(url).then(response => {
      response.json().then(jsonRes => {
        this.props.resultsReceivedCallback(jsonRes);
      })
    });
  }
}

AutoComplete.defaultProps = {
  resultsPendingCallback: () => {},
  resultsReceivedCallback: () => {},
};
