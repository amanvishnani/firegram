import React from 'react'
import useFeed from '../hooks/useFeed'
import PhotoCard from './PhotoCard';
import { Grid } from '@material-ui/core';

export default function PhotoGrid() {
    let { feed } = useFeed()
    console.log(feed);
    return (
        <div>
            <h2>Feed</h2>
            <br />
            <Grid container spacing={2}>
                {feed.map(
                    mediaItem => <PhotoCard key={mediaItem.id} {...mediaItem} />
                )}
            </Grid>
            <br/>
        </div>
    )
}
