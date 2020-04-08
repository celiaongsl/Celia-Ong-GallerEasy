import React, { Component } from 'react';
import './App.css';
import SearchBar from './Components/searchBar';
import Footer from './Components/footer';
import { GifStore } from './GifStore';
import FavouritePage from './Components/favouritePage';
import { Typography, Button, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core';

const gifStore = new GifStore();
const styles = {
  activeButton: {
    "&:active": {
      backgroundColor: "red"
    }
  }
}

//Note to self: See if u can fix the number of favourites issue before u submit
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isSearchState: true,
      isFavouriteState: false,
      numberOfFavourites: 0,
      fontWeightForFavourites: '400', //400, 600 or 700
      fontWeightForSearch: '600'
    }
  }

  updateNumberOfFavourites = () => {

  }

  triggerFavouriteState = () => {
    this.setState({
      ...this.state,
      isSearchState: !this.state.isSearchState,
      isFavouriteState: !this.state.isFavouriteState,
    })

    if(!this.state.isSearchState && this.state.isFavouriteState){
      this.setState({
        fontWeightForFavourites: '400',
        fontWeightForSearch: '600'
      })
    } else {
      this.setState({
        fontWeightForSearch: '400',
        fontWeightForFavourites: '600',
      })
    }
  }

  renderFavouritesButton = () => {
    const { numberOfFavourites } = this.state;
    return (
      <React.Fragment>
        <Button onClick={this.triggerFavouriteState}>
          <Typography style={{ fontWeight: this.state.fontWeightForFavourites }}>Favourites ({numberOfFavourites})</Typography>
        </Button>
      </React.Fragment>
    )
  }

  renderSearchButton = () => {
    return (
      <React.Fragment>
        <Button onClick={this.triggerFavouriteState}>
          <Typography style={{ fontWeight: this.state.fontWeightForSearch }} variant="subtitle1">Search</Typography>
        </Button>
      </React.Fragment>
    )
  }

  render() {
    return (
      <div className="App" style={{ width: '100%', float: 'left', height: '100vh' }}>
        <Grid container>
          <Grid item xs={12}>
            <div style={{ float: 'left', paddingLeft: '2%' }}>
              <Typography style={{ fontFamily: 'Open Sans' }}>Galler<strong>easy</strong> | {this.renderSearchButton()} {this.renderFavouritesButton()}</Typography>
            </div>
          </Grid>
          <Grid item style={{ width: '100%' }}>
            <hr></hr>
          </Grid>
          <Grid item xs={12}>
            {/* <Header gifStore={gifStore} triggerFavouriteState={this.triggerFavouriteState} /> */}
            <div style={{ width: '100%', textAlign: 'center' }}>
              {this.state.isSearchState && <SearchBar gifStore={gifStore} />}
              {this.state.isFavouriteState && <FavouritePage gifStore={gifStore} />}
            </div>
          </Grid>
          {/* <ImagesGrid /> */}
          <Grid item xs={12}>
            <Footer />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(App);
