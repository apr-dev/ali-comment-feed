import React, { useContext } from 'react';
import CommentCard from './commentCard';
import { GlobalContext } from './context/GlobalState';

const CommentFeed = () => {
    const { comments } = useContext(GlobalContext)
    console.log(comments, '<-- what am i gtting for commts?')
    return (
        <div>
            {
                comments.map((card) => (<CommentCard card={card}/>))
            }
        </div>
    )
    
}

export default CommentFeed;