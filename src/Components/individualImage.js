import React, { Component } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
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
            numberOfFavourites: 0,
            isLoaded: true,
        }
    }

    componentDidMount() {
        //Set favourite from the store (if there are favourites)
        const { gifStore, image } = this.props;
        const { getFavouriteGifs } = gifStore
        if (getFavouriteGifs.length !== 0) {
            getFavouriteGifs.find((favourited) => {
                if (favourited.id === image.id) {
                    this.setState({
                        favourite: true
                    })
                }
                return null
            })
        }
    }

    favouriteImg = (e) => {
        const { gifStore, updateNumberOfFavourites } = this.props;
        const { setFavouriteGifs } = gifStore;
        setFavouriteGifs(e)
        updateNumberOfFavourites(e)
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

    handleImageLoaded = () => {
        this.setState({
            isLoaded: false
        })
    }

    renderImage = () => {
        const { image } = this.props;
        const { favourite } = this.state;
        return(
            <React.Fragment>
                <Grid
                    className="wrapper"
                    item
                    md={4} sm={6} lg={3} xl={3} xs={12} key={image.id}>
                    <div class="box" onClick={() => this.favouriteImg(image)}>
                        <img
                            alt={image.title}
                            src={image.images.fixed_height_still.url}
                            onLoad={this.handleImageLoaded}
                            width={300} height={300} style={{ objectFit: 'cover', cursor: 'pointer', width: '90%', margin: '0 auto' }} />
                        {favourite ? this.renderFavouriteOverlay() : this.renderUnfavouriteOverlay()}
                    </div>
                </Grid>
            </React.Fragment>
        )
    }
    render() {
        const { image } = this.props;
        const { favourite, isLoaded } = this.state;
        const imgStyle = { objectFit: 'cover', cursor: 'pointer', width: '90%', margin: '0 auto' }
        return(
            <React.Fragment>
                <Grid
                    className="wrapper"
                    item
                    md={4} sm={6} lg={3} xl={3} xs={12} key={image.id}>
                    <div class="box" onClick={() => this.favouriteImg(image)}>
                        <img
                            alt={image.title}
                            src={image.images.fixed_height_still.url}
                            onLoad={() => this.setState({ isLoaded: true})}
                            width={300} height={300} 
                            style={this.state.isLoaded ? {imgStyle} : {display: 'none'}} />
                        {favourite ? this.renderFavouriteOverlay() : this.renderUnfavouriteOverlay()}
                    </div>
                </Grid>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(ImagesGrid);