import React from 'react'
import Aux from './Aux'
import ImageCard from './ImageCard'

const ImageList = props => {

    const images = props.images.map((
        {
            id,
            alt_description,
            urls,
            links: { download }
        }) => {
        return <ImageCard image={{ alt_description, urls, id, download }} key={id} />
    })

    return (<Aux className="images" >{images}</Aux>)
}

export default ImageList