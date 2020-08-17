import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'
import { motion } from 'framer-motion';

let styles = {
    card: {
        maxHeight: 300,
        overflow: 'hidden',
    },
    cardImage: {
        minHeight: 300,
        maxWidth: '100%',
    },
    cardRoot: {
        opacity: 0.8,
    }
}

function PhotoCard(props) {
    return (
        <Grid style={styles.card} item xs={12} sm={6} md={4}>
            <motion.div style={styles.cardRoot} layout whileHover={{ opacity: 1 }}>
                <motion.img style={styles.cardImage} alt={props.id} src={props.url} initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }} />
            </motion.div>
        </Grid>
    )
}

PhotoCard.propTypes = {
    id: PropTypes.string,
    url: PropTypes.string,
    createdAt: PropTypes.number
}

export default PhotoCard

