import React from 'react'

class ImageCard extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            url: '',
            alt: '',
        }
        this.ref = React.createRef()
    }

    componentDidMount() {
        const { urls, alt_description } = this.props.image

        this.setState({
            url: urls.regular,
            alt: alt_description,
        })
    }

    render() {
        return (
            <div className="image">
                <img ref={this.ref} src={this.state.url} alt={this.state.alt} />
            </div>
        )
    }
}

export default ImageCard