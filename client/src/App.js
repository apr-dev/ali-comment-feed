import './App.css';
import React, { Component } from 'react';
import CommentForm from './commentForm';
import CommentFeed from  './commentFeed';
import { GlobalProvider } from './context/GlobalState'
import Typography from '@mui/material/Typography';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Typography variant="h6" sx={{ my: 3 }}>
          Comment here, but be nice! ✨
        </Typography>
        <GlobalProvider>
          <CommentForm/>
          <CommentFeed/>
        </GlobalProvider>
      </div>
    );
  }
}

export default App;
