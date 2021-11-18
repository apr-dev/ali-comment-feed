import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { Component } from 'react';

class CommentForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            comment: ""
        }
    }

    handleChange = (evt) => {
        const target = evt.target
        const name = target.name
        this.setState({ [name]: evt.target.value })
    }

    submitComment = () => {
        const { submitComment } = this.props
    }

    render() {
        const { name, comment } = this.state
        return (
            <>
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
                        value={name}
                        name='name'
                        onChange={this.handleChange}
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
                        value={comment}
                        name='comment'
                        onChange={this.handleChange}
                    />
                    </div>
                </Box>
            <Button variant="contained">SUBMIT</Button>
          </>
        )
    }
}

export default CommentForm;