import React from 'react'

const GifList = (props) => {
    return (
        <ul>
            {props.gifs.length > 0 && props.gifs.map(gif => 
                <li key={gif.id}>
                    <img alt="gif" src={gif.images.original.url}/>
                </li>
            )}
        </ul>
    )
}

export default GifList