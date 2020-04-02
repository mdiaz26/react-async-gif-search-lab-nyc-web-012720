import React from 'react'

class GifSearch extends React.Component {

    state= {
        searchKey: ""
    }

    handleChange = (event) => {
        this.setState({
            searchKey: event.target.value
        })
    }

    submitHandler = (event) => {
        event.preventDefault()
        this.props.handleNewSearch(this.state)
        this.setState({searchKey: ""})
    }

    render(){
        return (
            <form onSubmit={this.submitHandler}>
                <label>Enter a search term:</label>
                <input type="text" value={this.state.searchKey} onChange={this.handleChange}></input>
                <button>Find GIF</button>
            </form>
        )
    }
}

export default GifSearch