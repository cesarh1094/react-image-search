import React from 'react'
import Aux from './Aux'

const ImageList = (props) => {
    const images = props.images.map(({ id, alt_description, description, urls }, index) => {
        return (
            <div className="image" key={id}>
                <img alt={alt_description} src={urls.regular} />
            </div>
        )
    })

    return (<Aux className="images">{images}</Aux>)
}

ImageList.defaultProps = {
    images: []
}

export default ImageList