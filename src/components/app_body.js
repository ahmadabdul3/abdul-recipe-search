import React, { Component } from 'react';


// - dumb component for now
export default class AppBody extends Component {
  searchForRecipes = (e) => {
    // - since we're doing a search on each change, we don't need to
    //   save the input value anywhere in state
    this.props.searchForRecipes(e.target.value);
  }

  renderResults() {
    const { searchResults } = this.props;

    return searchResults.map((result, key) => <SearchResult text={result} key={key} />);
  }

  render() {
    return (
      <div className='app-body'>
        <div className='input-button-combo'>
          <input
            type='text'
            placeholder='Search for...'
            onChange={this.searchForRecipes} />
          <button>
            Search
          </button>
        </div>
        <div className='search-results'>
          { this.renderResults() }
        </div>
      </div>
    );
  }
}

function SearchResult({ text }) {
  return (
    <div className='search-result'>
      { text }
    </div>
  );
}
