import React, {Component} from 'react';
import {connect} from 'react-redux';

import './book-list.css';

import {withBookstoreService} from '../hoc';
import {fetchBooks, bookAddedToCart} from '../../actions';
import compose from '../../utils';

import BookListItem from '../book-list-item';
import Loader from '../loader';
import ErrorIndicator from '../error-indicator';

const BookList = ({books, onAddedToCart}) => {
  return (
    <ul className="book-list">
      {
        books.map((book) => {
          return (
            <li key={book.id}>
              <BookListItem
                onAddedToCart={() => onAddedToCart(book.id)}
                book={book} />
            </li>
          );
        })
      }
    </ul>
  );
};

class BookListContainer extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const {books, loading, error, onAddedToCart} = this.props;

    if (loading) {
      return <Loader />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return <BookList
      onAddedToCart={onAddedToCart}
      books={books} />
  }
}

const mapStateToProps = ({books, loading, error}) => {
  return {books, loading, error};
};

const mapDispatchToProps = (dispatch, {bookstoreService}) => {
  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch),
    onAddedToCart: (id) => dispatch(bookAddedToCart(id)),
  };
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
