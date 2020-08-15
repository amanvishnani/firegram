import React from 'react'
import useFeed from '../hooks/useFeed'

export default function PhotoGrid() {
    let { feed } = useFeed()
    console.log(feed);
    return (
        <div>
            <h2>Feed</h2>
        </div>
    )
}
