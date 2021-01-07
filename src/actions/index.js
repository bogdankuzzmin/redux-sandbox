const booksLoaded = (newBooks) => {
  return {
    type: 'BOOKS_LOADED',
    payload: newBooks,
  }
};

const booksRequested = () => {
  return {
    type: 'BOOK_REQUESTED'
  };
};

export {
  booksLoaded,
  booksRequested,
};
