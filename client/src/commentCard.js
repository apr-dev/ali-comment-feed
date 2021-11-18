import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const CommentCard = ({card}) => {
    return (
        <Card sx={{ width: 475, my: 3 }}>
            <CardContent>
                <Typography variant="body1" color="text.secondary">
                    { card.message }
                </Typography>
            </CardContent>
            <CardActions>
                <Typography variant="body2">
                   Comment by { card.name } on { card.created }
                </Typography>
            </CardActions>
        </Card>
    )
}

export default CommentCard;