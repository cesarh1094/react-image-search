import React from 'react'
import Aux from './Aux'

class SearchBar extends React.Component {
    state = {
        search: ''
    }

    onInputChange = event => (this.setState({ search: event.target.value.toUpperCase() }))

    onFormSubmit = event => {
        event.preventDefault()
        this.props.onSubmit(this.state.search)
    }

    render() {
        return (
            <Aux>
                <form onSubmit={this.onFormSubmit}>
                    <label>Image Search</label>
                    <input
                        type="text"
                        value={this.state.search}
                        onChange={this.onInputChange} />
                </form>
            </Aux>
        )
    }
}

export default SearchBar