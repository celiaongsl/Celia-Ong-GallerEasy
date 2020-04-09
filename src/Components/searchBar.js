import React, { Component } from 'react';
import { TextField, Grid } from '@material-ui/core';
import axios from 'axios';
import { observer } from 'mobx-react';
import ImagesGrid from './individualImage'

const API_KEY = 'S7w5A9kEnFM0y2yTqekF0juPUqTK2H1w'
class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            keyword: '',
            searchedGifs: '',
            showGif: false,
        }
    }

    giphySearch = (keyword) => {
        const { gifStore } = this.props;
        axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=8`)
            .then((res) => {
                return res.data.data
            }).then((res) => {
                gifStore.setGifs(res)
                this.setState({
                    showGif: true
                })
            }).catch((err) => {
                console.log(err)
            })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.giphySearch(this.state.keyword)
    }

    handleChange = (e) => {
        const { value } = e.target
        this.setState({
            keyword: value
        })
    }

    render() {
        const { keyword, showGif } = this.state;
        const { gifStore, updateNumberOfFavourites } = this.props
        return (
            <div style={{ width: '100%' }}>
                <form onSubmit={this.handleSubmit}>
                    <TextField style={{ width: '70%' }} onChange={(e) => this.handleChange(e)} value={keyword} placeholder="Start searching for images!" />
                </form>
                <br />
                {showGif ?
                    <Grid container spacing={2}>
                        {gifStore.getGifs.map((image, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <ImagesGrid gifStore={gifStore} image={image} updateNumberOfFavourites={updateNumberOfFavourites} />
                                </React.Fragment>
                            )
                        })}
                    </Grid> : ""
                }
            </div>
        )
    }
}

SearchBar = observer(SearchBar);
export default SearchBar;