import React, { useContext } from 'react';
import CommentCard from './commentCard';
import { GlobalContext } from './context/GlobalState';

const CommentFeed = () => {
    const { comments } = useContext(GlobalContext)
    return (
        <div>
            {
                comments.map((card, i) => (<CommentCard key={`${i}_card`} card={card}/>))
            }
        </div>
    )
    
}

export default CommentFeed;