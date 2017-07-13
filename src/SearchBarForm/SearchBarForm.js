import React, { Component } from 'react';
import './SearchBarForm.css';
import SearchBarBoxWhat from '../SearchBarBoxWhat/SearchBarBoxWhat';
import SearchBarBoxWhere from '../SearchBarBoxWhere/SearchBarBoxWhere';
import SearchBarSearchButton from '../SearchBarSearchButton/SearchBarSearchButton';
import PropTypes from 'prop-types';

class SearchBarForm extends Component {

  static propTypes = {
    changeHandler: PropTypes.func.isRequired,
    clickedTerm: PropTypes.string.isRequired
  }

  render() {
    return (
      <form name="suggest-form">
        <SearchBarBoxWhat changeHandler={ this.props.changeHandler } clickedTerm={ this.props.clickedTerm } />
        <SearchBarBoxWhere changeHandler={ this.props.changeHandler } clickedTerm={ this.props.clickedTerm } />
        <SearchBarSearchButton />
			</form>
    );
  }
}

export default SearchBarForm;
