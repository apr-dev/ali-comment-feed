import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const CommentCard = () => {
    const date = new Date().toLocaleString()
    return (
        <Card sx={{ maxWidth: 475, my: 3 }}>
            <CardContent>
                <Typography variant="body1" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Typography variant="body2">
                   Some Person on { date }
                </Typography>
            </CardActions>
        </Card>
    )
}

export default CommentCard;