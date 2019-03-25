import React, { Component } from 'react';
import BookListContainer from './BookListContainer'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Bookish</h1>
        <BookListContainer />
      </div>
    );
  }
}

export default App;
