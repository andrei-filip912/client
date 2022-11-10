import React from 'react';
import ReactPlayer from 'react-player';
import {Card, CardMedia, CardContent, Typography } from '@mui/material';

/* eslint-disable */

function VideoCard({url, name }) {
    return (
        <Card
            variant="outlined"
        >
            <CardMedia>
                <ReactPlayer
                    url={url}
                    controls={true}
                    width='100%'
                    heigh='100%'
                />
            </CardMedia>
            <CardContent>
                <Typography>
                    {name}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default VideoCard;