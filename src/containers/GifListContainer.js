import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {
    state ={
        searchKey: "",
        gifs: []
    }

    fetchSearch = () => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.searchKey}&api_key=5fvJ4VHQ0WneiWcTrPMhTaQP7dERa15N&rating=g`)
        .then(response => response.json())
        .then(data => {
            if (data.data.length > 0) {
                this.setState({
                gifs: [data.data[0], data.data[1], data.data[2]]
                })
            }
        })
    }

    handleNewSearch = (state) => {
        this.setState(state, () => {this.fetchSearch()})
    }

    render(){
        console.log(this.state)
        return (
            <div>
                <GifSearch handleNewSearch={this.handleNewSearch}/>
                <GifList gifs={this.state.gifs}/>
            </div>
        )
    }
}