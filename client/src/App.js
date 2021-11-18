import './App.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className="App">
      <h2>Comment here, but be nice! ✨</h2>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        style={{ width: '30%' }}
      >
        <div className="text-field-container">
          <TextField 
            id="name-field" 
            label="What is your name?" 
            variant="filled"
          />
        </div>
        <div className="text-field-container">
          <TextField
            id="comment-field"
            label="What would you like to say?"
            multiline
            rows={6}
            fullWidth
            variant="filled"
          />
        </div>
      </Box>
      <Button variant="contained">SUBMIT</Button>
    </div>
  );
}

export default App;
