import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'

let styles = {
    card: {
        maxHeight: 300,
        overflow: 'hidden',
    },
    cardImage: {
        minHeight: 300,
        maxWidth: '100%',
    }
}

function PhotoCard(props) {
    return (
        <Grid style={styles.card} item xs={12} sm={6} md={4}>
            <img style={styles.cardImage} alt={props.id} src={props.url} />
        </Grid>
    )
}

PhotoCard.propTypes = {
    id: PropTypes.string,
    url: PropTypes.string,
    createdAt: PropTypes.number
}

export default PhotoCard

