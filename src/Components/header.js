import React, { Component } from 'react';
import { Typography, Button } from '@material-ui/core';
import FavouritePage from './favouritePage';

class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            numberOfFavourites: 0
        }
    }

    renderFavouritesButton = () => {
        // const { gifStore } = this.props
        // var number
        // if(gifStore.getFavouriteGifs){
        //     number = gifStore.getFavouriteGifs.length()
        // } else {
        //     number = 0
        // }
        // let number = gifStore.getFavouriteGifs.length !== 0 ? gifStore.getFavouriteGifs.length() : 0
        // let number = 0
        // const { gifStore } = this.props;
        // const { getFavouriteGifs } = gifStore
        // if(getFavouriteGifs.length !== 0){
        //     console.log("does this update itself constantly??")
        //     this.setState({
        //         numberOfFavourites: getFavouriteGifs.length
        //     })
        // }
        const { numberOfFavourites } = this.state;
        return (
            <React.Fragment>
                <Button onClick={this.props.triggerFavouriteState}>Favourites ({numberOfFavourites})</Button>
            </React.Fragment>
        )
    }

    renderSearchButton = () => {
        return (
            <React.Fragment>
                <Button onClick={this.props.triggerFavouriteState}>Search</Button>
            </React.Fragment>
        )
    }

    render() {
        const { gifStore } = this.props;
        const { getFavouriteGifs } = gifStore
        console.log(getFavouriteGifs)
        console.log("will this re=render each time??")
        return (
            <div>
                <Typography>Galler<strong>easy</strong> | {this.renderSearchButton()} {this.renderFavouritesButton()}</Typography>
            </div>
        )
    }
}

export default Header;