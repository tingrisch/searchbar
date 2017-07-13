import React, { Component } from 'react';
import './SearchBarSearchButton.css';

class SearchBarSearchButton extends Component {
  render() {
    return (
      <div className="SearchBarSearchButton">
        <input type="submit" name="submit" value="Suchen" />
      </div> 
    );
  }
}

export default SearchBarSearchButton;
