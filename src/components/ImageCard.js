import React from 'react'

const ImageCard = props => {

    const { alt_description, urls, id, download } = props.image

    return (
        <div className="image" data-id={id}>
            <a href={download} target="_blank"  rel="noopener noreferrer" className="image-download">
                <img src={urls.regular} alt={alt_description} />
            </a>
        </div>
    )
}

ImageCard.defaultProps = {
    image: {}
}

export default ImageCard