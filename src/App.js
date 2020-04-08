import React, { Component } from 'react';
import './App.css';
import Header from './Components/header';
import SearchBar from './Components/searchBar';
import ImagesGrid from './Components/individualImage'
import Footer from './Components/footer';
import { GifStore } from './GifStore';
import FavouritePage from './Components/favouritePage';

const gifStore = new GifStore();

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isSearchState: true,
      isFavouriteState: false
    }
  }

  triggerFavouriteState = () => {
    this.setState({
      ...this.state,
      isSearchState: !this.state.isSearchState,
      isFavouriteState: !this.state.isFavouriteState
    })
  }

  render() {
    return (
      <div className="App" style={{ width: '100%' }}>
        <Header gifStore={gifStore} triggerFavouriteState={this.triggerFavouriteState} />
        <div style={{ width: '100%', textAlign: 'center' }}>
          {this.state.isSearchState && <SearchBar gifStore={gifStore} />}
          {this.state.isFavouriteState && <FavouritePage gifStore={gifStore} />}
        </div>
        {/* <ImagesGrid /> */}
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
