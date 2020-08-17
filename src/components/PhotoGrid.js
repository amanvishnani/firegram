import React from 'react'
import useFeed from '../hooks/useFeed'
import PhotoCard from './PhotoCard';
import { Grid } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';


export default function PhotoGrid() {
    let { feed, loading } = useFeed()

    function renderPhotos() {
        return <Grid container spacing={2}>
            {feed.map(
                mediaItem => <PhotoCard key={mediaItem.id} {...mediaItem} />
            )}
        </Grid>
    }

    function renderSkeleton() {
        return <Grid container spacing={2}>
            {[0, 1, 2, 3, 4, 5].map(
                i => <Grid item xs={12} sm={6} md={4}  key={i} >
                    <Skeleton variant="rect" width={"100%"} height={300}/>
                </Grid>
            )}
        </Grid>
    }

    return (
        <div>
            <h2>Feed</h2>
            <br />
            {loading ? renderSkeleton() : renderPhotos()}
            <br />
        </div>
    )
}
