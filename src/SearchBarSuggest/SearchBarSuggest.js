import React, { Component } from 'react';
import './SearchBarSuggest.css';
import SuggestItem from '../SearchBarSuggestItem/SearchBarSuggestItem';

class SearchBarSuggest extends Component {
  render() {
    return (
      <div className="SearchBarSuggest">
        {this.props.suggestData.suggests.map((item) => {
          return <SuggestItem header={ item.header } list={ item.list } handleClick={ this.props.handleClick } />
        })}
      </div>
    );
  }
}

export default SearchBarSuggest;
