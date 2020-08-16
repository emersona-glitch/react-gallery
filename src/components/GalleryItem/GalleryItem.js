import React, { Component } from 'react';
import './GalleryItem.css'
import Axios from 'axios';
// import App from '../App/App';

class GalleryItem extends Component {

    state = this.props.item;

    handleDescription = () => {
        console.log()
    }

    handleDelete = () => {
        console.log('dinkity delete!');
    }

    handleLike = () => {
        console.log(this.state.likes);
        // we need to get this information back to our gallery.data.js
        // to update the likes, and then we need to reprint to DOM
        Axios.put(`/gallery/like/${this.state.id}`, )
        .then(response => {
            console.log('we liked it', response);
        })
        .catch(error => {
            console.log('error in axios.get', error);
        });
        this.props.refresh()
        // great success now we need to refresh the DOM
    }

    //     <p class="description" id={this.props.item.id}>
    //     {this.props.item.description}
    // </p>
    // <img alt={this.props.item.description} src={this.props.item.path}></img>



    render() {
        return (
            <div class="galleryItem" id={this.props.item.id}>

                {/* <p class="description" id={this.props.item.id}>
                {this.props.item.description}
        </p>*/}
                <img alt={this.props.item.description} src={this.props.item.path}></img>
                <placeholder />
                <br />
                <button onClick={this.handleDelete}>DELETE</button>
                {/* going to want to add onClick functions in here */}
                <button onClick={this.handleLike}>LIKES: {this.props.item.likes}</button>
                <p>{this.props.item.description}</p>
            </div>
        )
    }

}

export default GalleryItem;