import React from 'react';
import ReactPlayer from 'react-player';
import { Card, CardMedia, CardContent, Typography, Grid } from '@material-ui/core';
/* eslint-disable */

function VideoCard({url, name }) {
    return (
        <Card
            variant="outlined"
            sx={{ width: '34%' }}
        >
            <CardMedia>
                <ReactPlayer
                    url={url}
                    controls={true}
                    width='100%'
                />
            </CardMedia>
            <CardContent>
                <Typography variant="title" color="text.primary">
                    {name}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default VideoCard;