import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem'

class GalleryList extends Component {

    render() {
        return (
            <>
                {this.props.galleryList.map((item) => {
                   return (
                       <GalleryItem key={item.id}/>
                   )
                })}
            </>
        )
    }

}

export default GalleryList;