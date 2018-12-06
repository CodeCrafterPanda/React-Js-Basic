import React, { Component } from 'react';
import uuid from 'uuid';

class Addbook extends Component {
  state = {
    name: '',
    author: '',
    isbn: '',
    pages: '',
    issuedTo: null,
    showInfo: false
  };

  getBooks = () => {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }

    return books;
  };

  onSubmit = e => {
    e.preventDefault();
    const newBook = {
      id: uuid(),
      ...this.state
    };

    const books = this.getBooks();

    books.push(newBook);

    localStorage.setItem('books', JSON.stringify(books));

    this.props.history.push('/');
  };

  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  render() {
    const { name, author, isbn, pages } = this.state;
    return (
      <React.Fragment>
        <div className="col-md-3" />
        <div className="col-md-6">
          {' '}
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h5>Add New Book </h5>
            </div>
            <div className="card-body">
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Title"
                    name="name"
                    value={name}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder=" Author"
                    name="author"
                    value={author}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder=" ISBN"
                    name="isbn"
                    value={isbn}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder=" Pages"
                    name="pages"
                    value={pages}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    className="btn btn-primary btn-block"
                    value="Add Book"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Addbook;
