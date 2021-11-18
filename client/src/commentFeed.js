import React, { useContext } from 'react';
import CommentCard from './commentCard';
import { GlobalContext } from './context/GlobalState';

const CommentFeed = () => {
    const { comments } = useContext(GlobalContext)
    return (
        <div>
            {
                comments.map((card) => (<CommentCard/>))
            }
        </div>
    )
    
}

export default CommentFeed;