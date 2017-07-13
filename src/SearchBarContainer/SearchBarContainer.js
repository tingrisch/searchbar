import React, { Component } from 'react';
import './SearchBarContainer.css';
import SearchBarForm from '../SearchBarForm/SearchBarForm';
import SearchBarSuggest from '../SearchBarSuggest/SearchBarSuggest';

class SearchBarContainer extends Component {
  
  constructor() {
    super()
    this.state = {
      suggestData: {
        suggests: []
      },
      term: ""
    }
  }

  changeHandler(event, type) {
    let searchTerm = event.target.value,
        url = '';
    
    this.setState({ term: searchTerm });

    if (type === 'what' && searchTerm.length > 0) {
      url = 'https://www.jameda.de/suggest.php?query='+searchTerm+'&echo=Zahnarzt'
    }

    if (type === 'where' && searchTerm.length > 0) {
      url = 'https://suche.jameda-elements.de/where-new?query='+searchTerm
    }

    this.loadData(url);
  }

  handleClick(event) {
    this.setState({
      term: event.target.text
    })
  }

  loadData(url) {
    fetch(url)
    .then(response => response.json())
    .then((json) => {
      this.setState({ suggestData: json });
    })
    .catch((e) => console.log(e));
  }

  render() {

    return (
      <div className="SearchBarContainer">
        <SearchBarForm changeHandler={ this.changeHandler.bind(this) } clickedTerm={ this.state.term } />
        <SearchBarSuggest suggestData={ this.state.suggestData } handleClick={ this.handleClick.bind(this) } />
      </div>
    );
  }
}

export default SearchBarContainer;
