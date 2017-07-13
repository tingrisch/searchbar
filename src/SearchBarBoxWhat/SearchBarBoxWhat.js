import React, { Component } from 'react';
import './SearchBarBoxWhat.css';
import PropTypes from 'prop-types';

class SearchBarBoxWhat extends Component {

  static propTypes = {
    changeHandler: PropTypes.func.isRequired,
    clickedTerm: PropTypes.string.isRequired
  }

  render() {
    return (
      <div className="SearchBarBoxWhat">
        <input type="text" 
          name="what"
          value={ this.props.clickedTerm }
          onChange={ (e) => { this.props.changeHandler(e, 'what') } } />
      </div>
    );
  }
}

export default SearchBarBoxWhat;
