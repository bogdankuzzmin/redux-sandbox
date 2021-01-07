export default class BookstoreService {

  data = [
    {
      id: 1,
      title: 'Harry Potter and the Chamber of Secrets',
      author: 'J.K. Rowling',
      price: 32,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/81YOuOGFCJL.jpg',
    },
    {
      id: 2,
      title: '7 Навыков Высокоэффективных Людей',
      author: 'Стивен Р. Кови',
      price: 44,
      coverImage: 'https://i4.mybook.io/p/512x852/book_covers/52/a2/52a2b562-ac47-4663-96b8-485e634a8d5d.jpg?v2',
    }
  ];

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.75) {
          reject(new Error('Something bad happened'));
        } else {
          resolve(this.data);
        }
      }, 700);
    });
  }
}
