const initialState = {
  books: [
    {
      id: 1,
      title: 'Harry Potter and the Chamber of Secrets',
      author: 'J.K. Rowling',
    },
    {
      id: 2,
      title: '7 Навыков Высокоэффективных Людей',
      author: 'Стивен Р. Кови',
    }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BOOKS_LOADED':
      return {
        books: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
