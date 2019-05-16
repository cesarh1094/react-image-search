import React from 'react'
import unsplash from './api/unsplash'
import _ from 'lodash'
import Aux from './components/Aux'
import SearchBar from './components/SearchBar'
import ImageList from './components/ImageList';
import './App.css'
import { ReactComponent as Logo } from './logo.svg'

class App extends React.Component {
  state = { images: [] }

  componentDidMount() {
    unsplash.get(`/search/photos`, {
      params: { query: 'cars' },
    })
      .then(response => (this.setState({ images: _.get(response, ['data', 'results'], []) })))
      .catch((error) => { })
  }

  onSearchSubmit = async (search) => {
    const response = await unsplash.get(`/search/photos`, {
      params: { query: search },
    })

    this.setState({ images: _.get(response, ['data', 'results'], []) })
  }

  render() {
    return (
      <Aux>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
        <div className="wrapper">
          <footer>
            <p>Powered By:</p>
            <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
              <Logo className="logo" alt="React"/>
            </a>
          </footer>
        </div>
      </Aux>
    );
  }
}

export default App;
