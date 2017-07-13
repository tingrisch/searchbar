import React, { Component } from 'react';
import './SearchBarSuggestItem.css';

class SearchBarSuggestItem extends Component {

  render() {
    return (
      <div>
        <div className="SuggestHeader">{this.props.header}</div>
        {this.props.list.map((item) =>
          <a href="#"
            onClick={ (e) => { this.props.handleClick(e) } }
            className="SuggestItem">
            {item.showSelect ? item.showSelect : item.term
          }</a>
        )}
      </div>
    );
  }
}

export default SearchBarSuggestItem;