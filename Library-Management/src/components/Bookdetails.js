import React, { Component } from 'react';

class Bookdetails extends Component {
  state = {
    issueNow: false,
    toIssue: ''
  };
  onClose = () => {
    this.setState({ issueNow: false });
    this.props.closeClickHandler();
  };

  onReturn = e => {
    e.preventDefault();
    const { book } = this.props;
    let books = JSON.parse(localStorage.getItem('books'));

    books.forEach((bookToUpdate, index) => {
      if (book.id === bookToUpdate.id) {
        let updatedBook = this.props.book;
        updatedBook.issuedTo = null;
        updatedBook.showInfo = false;
        books.splice(index, 1, updatedBook);
      }
    });
    localStorage.setItem('books', JSON.stringify(books));
    this.onClose();
  };

  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  onSubmit = e => {
    e.preventDefault();
    const { book } = this.props;
    let books = JSON.parse(localStorage.getItem('books'));

    books.forEach((bookToUpdate, index) => {
      if (book.id === bookToUpdate.id) {
        let updatedBook = this.props.book;
        updatedBook.issuedTo = this.state.toIssue;
        updatedBook.showInfo = false;
        books.splice(index, 1, updatedBook);
      }
    });
    localStorage.setItem('books', JSON.stringify(books));
    this.onClose();
  };
  render() {
    const { book } = this.props;
    const { showInfo, issuedTo } = this.props.book;
    const { issueNow, toIssue } = this.state;
    return (
      <React.Fragment>
        {showInfo ? (
          <div className="card mb-3">
            <div className="card-header bg-primary">
              <h5>
                <strong className="text-white">{book.name}</strong>
                {issuedTo ? (
                  <a
                    className="pull-right"
                    onClick={this.onReturn}
                    style={{ color: 'black' }}
                  >
                    Return Book
                  </a>
                ) : (
                  <a
                    className="pull-right"
                    onClick={this.onClose}
                    style={{ color: 'black' }}
                  >
                    Close
                  </a>
                )}
              </h5>
            </div>
            <div className="card-body">
              <div className="list-group-item">
                <strong>Author:</strong> {book.author}
              </div>
              <div className="list-group-item">
                <strong>ISBN:</strong> {book.isbn}
              </div>
              <div className="list-group-item">
                <strong>Pages:</strong> {book.pages}
              </div>
              {issuedTo ? (
                <div className="list-group-item">
                  <strong>Issued To:</strong> {book.issuedTo}
                  <strong className="text-danger pull-right">
                    Not Available
                  </strong>
                </div>
              ) : (
                <React.Fragment>
                  <div className="list-group-item">
                    <strong>
                      <a
                        href="#!"
                        onClick={() =>
                          this.setState({ issueNow: !this.state.issueNow })
                        }
                      >
                        Issue Now
                      </a>
                    </strong>{' '}
                    {book.issuedTo}{' '}
                    <strong className="text-success pull-right">
                      Available
                    </strong>
                  </div>
                  {issueNow ? (
                    <form onSubmit={this.onSubmit}>
                      {' '}
                      <input
                        type="text"
                        className="form-control mt-3 mb-3"
                        placeholder="Issue To"
                        name="toIssue"
                        value={toIssue}
                        onChange={this.onChange}
                      />
                      <input
                        type="submit"
                        value="Issue"
                        className="pull-right btn btn-block btn-primary"
                      />
                    </form>
                  ) : null}
                </React.Fragment>
              )}
            </div>
          </div>
        ) : null}
      </React.Fragment>
    );
  }
}
export default Bookdetails;
