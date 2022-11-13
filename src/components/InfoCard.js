/* eslint-disable */
import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const InfoCard = ({ title, text, img }) => {
    return (
        <Card sx={{ maxWidth: '200px', maxHeight: '200px' }}>
            <CardMedia
                component="img"
                image={img}
                alt="image"
                sx={{ height: '20%', width: '40%', marginLeft: 'auto', marginRight: 'auto'}}
            >
            </CardMedia>
            <CardContent>
                <Typography gutterBottom variant="h6" component="div" >
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {text}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default InfoCard;