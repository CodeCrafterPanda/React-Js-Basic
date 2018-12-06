import React, { Component } from 'react';

class Book extends Component {
  onShow = () => {
    this.props.showClickHandler();
  };
  render() {
    const { book } = this.props;
    // console.log(this.props);
    return (
      <li className="list-group-item">
        <a href="#!" onClick={this.onShow}>
          {book.name}
        </a>
      </li>
    );
  }
}
export default Book;
