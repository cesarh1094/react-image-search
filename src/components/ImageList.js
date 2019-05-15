import React from 'react'
import Aux from './Aux'
import ImageCard from './ImageCard'

const ImageList = (props) => {
    const images = props.images.map(({ id, alt_description, urls }) => {
        return <ImageCard image={{ alt_description, urls }} key={id} />
    })

    return (<Aux className="images">{images}</Aux>)
}

ImageList.defaultProps = {
    images: []
}

export default ImageList