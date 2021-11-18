import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { Component } from 'react';
import { GlobalContext } from './context/GlobalState';

class CommentForm extends Component {
    static contextType = GlobalContext;
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
        const { name, comment } = this.state
        const { addComment } = this.context

        if (name.trim().length > 0 && comment.trim().length > 0) {
            addComment({ name, comment })
            this.setState({ name: '', comment: '' })
        }
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
                        fullWidth
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
            <Button onClick={this.submitComment} variant="contained">
                Submit
            </Button>
          </>
        )
    }
}

export default CommentForm;