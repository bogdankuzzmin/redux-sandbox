import React, {Component} from 'react';
import {connect} from 'react-redux';

import './book-list.css';

import BookListItem from '../book-list-item';

class BookList extends Component {
  render() {
    console.log(this.props);
    const {books} = this.props;

    return (
      <ul>
        {
          books.map((book) => {
            return (
              <li key={book.id}><BookListItem book={book}/></li>
            );
          })
        }
      </ul>
    );
  }
}

const mapStateToProps = ({books}) => {
  return {books};
};

export default connect(mapStateToProps)(BookList);
