import React, { Component } from 'react';
import { Typography, Button } from '@material-ui/core';

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            numberOfFavourites: 0
        }
    }

    componentDidUpdate() {
        console.log("onclick doesnt change this much does it")
        const { gifStore } = this.props;
        const { getNumberOfFavourites } = gifStore;
        //If the state of numberoffavourites != props of getNumberOfFavourites...??
        if (this.state.numberOfFavourites !== getNumberOfFavourites) {
            console.log("why r u not going in")
            this.setState({
                numberOfFavourites: getNumberOfFavourites
            })
        }
    }

    renderFavouritesButton = () => {
        const { gifStore } = this.props;
        const { getNumberOfFavourites } = gifStore;
        console.log(getNumberOfFavourites)
        console.log("does this get updated now??")
        // console.log(getFavouriteGifs.length)
        // console.log('does this get updated and sent here??')
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