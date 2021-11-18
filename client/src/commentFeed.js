import React, { Component } from 'react';
import CommentCard from './commentCard'

class CommentFeed extends Component {
    constructor(props) {
        super(props)
        this.state = {
            feedItems: [{}, {}, {}]
        }
    }

    render() {
        const { feedItems } = this.state
        return (
            <div>
                {
                    feedItems.map((card) => (<CommentCard/>))
                }
            </div>
        )
    }
}

export default CommentFeed;