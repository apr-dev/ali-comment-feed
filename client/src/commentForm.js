import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { Component } from 'react';
import { GlobalContext } from './context/GlobalState';
import { v4 as uuidv4 } from 'uuid';

class CommentForm extends Component {
    static contextType = GlobalContext;
    constructor(props) {
        super(props)
        this.state = {
            id: null,
            name: '',
            message: '',
            date: null,
            invalidName: false,
            invalidMessage: false
        }
    }

    componentDidMount() {
        // const { deleteComments } = this.context
        // deleteComments()
    }

    handleChange = (evt) => {
        const target = evt.target
        const name = target.name
        this.setState({ [name]: evt.target.value })
    }

    submitComment = () => {
        const { name, message } = this.state
        const { addComment } = this.context
        const date = new Date().toLocaleString()

        const isBlankMessage = message.trim().length === 0
        const isBlankName = name.trim().length === 0

        if (!isBlankMessage && !isBlankName) {
            addComment({ id: uuidv4(), name, message, created: date })
            this.setState({ 
                id: null, 
                name: '', 
                message: '', 
                date: null
            })
        } else {
            this.setState({ invalidName: isBlankName, invalidMessage: isBlankMessage })
        }
    }

    handleOnFocus = (evt) => {
        const target = evt.target
        const name = target.name
        if (name === 'name') {
            this.setState({ invalidName: false })
        } else {
            this.setState({ invalidMessage: false})
        }
    }

    render() {
        const { name, message, invalidMessage, invalidName } = this.state
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
                        error={invalidName}
                        helperText={invalidName && "Please enter a valid name."}
                        onFocus={this.handleOnFocus}
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
                        value={message}
                        name='message'
                        onChange={this.handleChange}
                        error={invalidMessage}
                        helperText={invalidMessage && "Please enter a valid comment."}
                        onFocus={this.handleOnFocus}
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