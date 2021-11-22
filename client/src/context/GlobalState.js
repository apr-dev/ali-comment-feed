import React, { createContext, useReducer, useEffect } from 'react';
import Reducer from './AppReducer';
import { io } from "socket.io-client";

const initialState = {
   comments : []
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState);

    useEffect(() => {
        let url = "/getComments";
        fetchData(url)
    }, []);

    const fetchData = (url) => {
        fetch(url)
        .then((response) => response.json())
        .then(comments => {
            let sorted = comments.sort((a, b) => {
                return new Date(b.created) - new Date(a.created)
            })
            dispatch({
                type: 'FETCH_COMMENTS',
                payload: sorted
            })
        })
        .catch((error) => console.log(error));
    }

    const addComment = (payload) => {
        let socket = io.connect('http://localhost:3001')
        let url = "/createComment";
        fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(payload),
        })
        .then(response => response.json())
        .then(result => {
            console.log('Success:', result);
        })

        socket.emit("new_message", { message: payload });
   }

   const dispatchAddComment = (payload) => {
        dispatch({
            type: 'ADD_COMMENT',
            payload
        });   
    }

   const deleteComments = () => {
    let url = "/deleteComments";
        fetch(url, {
            method: 'DELETE',
        })
        .then(response => response.json())
        .then(result => {
            console.log('Success:', result);
        })
   }
  
    const removeComment = (comment) => {
        dispatch({
           type: 'REMOVE_COMMENT',
           payload: comment
        });
    }

    return (
        <GlobalContext.Provider 
            value={{
                comments: state.comments, 
                addComment,
                dispatchAddComment,
                removeComment,
                deleteComments
            }}
        > 
            {children} 
        </GlobalContext.Provider>
    )
}