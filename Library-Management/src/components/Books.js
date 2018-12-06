import React, { Component } from 'react';
import Book from './Book';
import Bookdetails from './Bookdetails';

class Books extends Component {
  state = {
    books: []
  };

  componentWillMount() {
    const books = this.getBooks();
    this.setState({
      books: books
    });
  }

  getBooks = () => {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }

    return books;
  };

  showClick = id => {
    const { books } = this.state;

    const newBooks = books.map(book => {
      if (book.id === id) {
        book.showInfo = !book.showInfo;
      } else {
        book.showInfo = false;
      }
      return book;
    });

    this.setState({
      books: newBooks
    });
  };

  returnClick = id => {
    const { books } = this.state;

    const newBooks = books.map(book => {
      if (book.id === id) {
        book.showInfo = false;
        book.issuedTo = null;
      } else {
        book.showInfo = false;
      }
      return book;
    });

    this.setState({
      books: newBooks
    });
  };
  closeClick = id => {
    const { books } = this.state;

    const newBooks = books.map(book => {
      if (book.id === id) {
        book.showInfo = false;
      }
      return book;
    });
    // alert('called');
    this.setState({
      books: newBooks
    });
  };

  render() {
    const { books } = this.state;
    return (
      <React.Fragment>
        <div className="col-md-5">
          <ul className="list-group">
            {books.map(book => (
              <Book
                key={book.id}
                book={book}
                showClickHandler={this.showClick.bind(this, book.id)}
              />
            ))}
          </ul>
        </div>
        <div className="col-md-7">
          {books.map(book => (
            <Bookdetails
              key={book.id}
              book={book}
              showClickHandler={this.showClick.bind(this, book.id)}
              returnClickHandler={this.returnClick.bind(this, book.id)}
              closeClickHandler={this.closeClick.bind(this, book.id)}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}
export default Books;
