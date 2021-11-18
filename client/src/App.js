import './App.css';
import React, { Component } from 'react';
import CommentForm from './commentForm';
import CommentFeed from  './commentFeed';
import { GlobalProvider } from './context/GlobalState'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Comment here, but be nice! ✨</h2>
        <GlobalProvider>
          <CommentForm/>
          <CommentFeed/>
        </GlobalProvider>
      </div>
    );
  }
}

export default App;
