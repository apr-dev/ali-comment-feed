import React, { useContext, useEffect } from 'react';
import CommentCard from './commentCard';
import { GlobalContext } from './context/GlobalState';
import { io } from "socket.io-client";

const CommentFeed = () => {
    const { comments, dispatchAddComment } = useContext(GlobalContext)
    
    useEffect(() => {
        let socket = io.connect('http://localhost:3001')
        socket.on("new_message", (data) => {
            dispatchAddComment(data.message)
        });
    }, [])
    
    return (
        <div>
            {
                comments.map((card, i) => (<CommentCard key={`${i}_card`} card={card}/>))
            }
        </div>
    )    
}

export default CommentFeed;