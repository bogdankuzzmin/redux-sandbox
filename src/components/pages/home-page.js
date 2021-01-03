import React from 'react';

import BookList from '../book-list';

const HomePage = () => {
  const books = [
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
  ];

  return (
    <BookList books={books}/>
  );
};

export default HomePage;
