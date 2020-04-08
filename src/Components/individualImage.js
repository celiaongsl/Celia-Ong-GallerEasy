import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles'
import './imagesGrid.css';
import FavoriteIcon from '@material-ui/icons/Favorite';

const styles = {
    tr: {
        '&:hover': {
            background: 'black'
        }
    }
}

class ImagesGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            opacity: 1,
            listOfFavouriteGifs: [],
            favourite: false,
            color: 'black'
        }
    }

    componentDidMount() {
        //prolly have to set favourite from the store (if there are favourites)
        const { gifStore, image } = this.props;
        const { getFavouriteGifs } = gifStore
        if (getFavouriteGifs.length !== 0) {
            getFavouriteGifs.find((favourited) => {
                if (favourited.id === image.id) {
                    this.setState({
                        favourite: true
                    })
                }
            })
        }
    }

    favouriteImg = (e) => {
        const { gifStore } = this.props;
        const { setFavouriteGifs } = gifStore;
        setFavouriteGifs(e)
        this.setState({
            favourite: !this.state.favourite,
        })
    }

    renderUnfavouriteOverlay = () => {
        return (
            <div class="overlay">
                <span class='icon' style={{opacity: '40%'}}><FavoriteIcon style={{ color: 'red' }} /></span>
            </div>
        )
    }

    renderFavouriteOverlay = () => {
        return (
            <div class="overlayfavourite">
                <span class='iconfavourite'><FavoriteIcon style={{ color: 'red' }} /></span>
            </div>
        )
    }
    render() {
        const { image } = this.props;
        const { favourite } = this.state;
        return (
            <React.Fragment>
                <Grid
                    className="wrapper"
                    item
                    md={3} sm={3} lg={3} xl={3} xs={12} key={image.id}>
                    <div class="box" onClick={() => this.favouriteImg(image)}>
                        <img
                            src={image.images.fixed_height_still.url}
                            width={250} height={250} style={{ objectFit: 'cover', cursor: 'pointer' }} />
                        {favourite ? this.renderFavouriteOverlay() : this.renderUnfavouriteOverlay()}
                    </div>
                </Grid>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(ImagesGrid);