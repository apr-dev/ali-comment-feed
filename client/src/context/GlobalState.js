import { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';

const initialState = {
   comments : []
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        let url = "/getComments";
        fetchData(url)
    }, []);

    const fetchData = (url) => {
        fetch(url)
        .then((response) => response.json())
        .then(comments => {
            dispatch({
                type: 'FETCH_COMMENTS',
                payload: comments
            })
        })
        .catch((error) => console.log(error));
    }

    const addComment = (comment) => {
        dispatch({
           type: 'ADD_COMMENT',
           payload: comment
        });
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
                removeComment
            }}
        > 
            {children} 
        </GlobalContext.Provider>
    )
}