import React, { Component } from 'react';
import './SearchBarBoxWhere.css';
import PropTypes from 'prop-types';

class SearchBarBoxWhere extends Component {

  static propTypes = {
    changeHandler: PropTypes.func.isRequired,
    clickedTerm: PropTypes.string.isRequired
  }

  render() {
    return (
      <div className="SearchBarBoxWhere">
        <input 
          type="text" 
          value={ this.props.clickedTerm }
          name="where" 
          onChange={ (e) => { this.props.changeHandler(e, 'where') } } />
      </div>
    );
  }
}

export default SearchBarBoxWhere;
