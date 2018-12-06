import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  onAddBook = () => {
    this.props.addBookHandler();
  };
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark primary-color mb-3">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Library Management
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#basicExampleNav"
            aria-controls="basicExampleNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="basicExampleNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/add-book">
                  Add Book
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
