import React, { Component } from 'react';
import ImagesGrid from './individualImage';
import { Typography, Grid } from '@material-ui/core'

class FavouritePage extends Component {
    render() {
        const { gifStore, updateNumberOfFavourites } = this.props
        const { getFavouriteGifs } = gifStore;
        //Issue: It unfavorites but doesn't remove on the spot
        if (getFavouriteGifs.length !== 0) {
            return (
                <div>
                    <Grid container spacing={2}>
                        {
                            getFavouriteGifs.map((image, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        <ImagesGrid image={image} gifStore={gifStore} updateNumberOfFavourites={updateNumberOfFavourites} />
                                    </React.Fragment>
                                )
                            })
                        }
                    </Grid>
                </div>
            )
        } else {
            return (
                <div>
                    <Typography>No favourites yet! Go search for some!</Typography>
                </div>
            )
        }
    }
}

export default FavouritePage;