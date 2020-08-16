import React, { Component } from 'react';
import './GalleryItem.css'
// import GalleryImage from '../GalleryImage/GalleryImage'
import Axios from 'axios';
// import App from '../App/App';

class GalleryItem extends Component {

    state = {
        isSecret: true
    }

    handleDescription = () => {
        console.log(this.state.isSecret);
        this.setState({
            isSecret: !this.state.isSecret
        })
    }

    handleDelete = () => {
        console.log('dinkity delete!');
    }


    handleLike = () => {
        console.log(this.props.item.likes);
        // we need to get this information back to our gallery.data.js
        // to update the likes, and then we need to reprint to DOM
        Axios.put(`/gallery/like/${this.props.item.id}`,)
            .then(response => {
                console.log('we liked it', response);
            })
            .catch(error => {
                console.log('error in axios.get', error);
            });
        this.props.refresh()
    }




    render() {
        return (
            <div id={this.props.item.id}>
                {this.state.isSecret
                ? <img alt={this.props.item.description}
                       src={this.props.item.path}
                       onClick={this.handleDescription}></img> 
                : <p class="galleryItem" onClick={this.handleDescription}>
                    {this.props.item.description}</p>}
                <br/>
                <button onClick={this.handleDelete}>DELETE</button>
                <button onClick={this.handleLike}>LIKES: {this.props.item.likes}</button>
                <p>{this.props.item.description}</p>
            </div>
        )
    }

}

export default GalleryItem;