// We always need to import react if we're going to do some JSX
import React, { Component } from 'react';
// this is where we source in our Gallery List component,
// which we've made as a component so that we can use it in a
// modular fashion, perhaps in some other project where it will
// server a similar but bespoke function.
import GalleryList from '../GalleryList/GalleryList'
// getting some styles for the default App appearance.
import './App.css';
import Axios from 'axios';

// defining a class 'App' as a component
class App extends Component {

  state = {
    galleryList: []
  };

  //like document.ready
  componentDidMount() {
    //do initial get request
    this.getGalleryData();
    console.log('donkey');

  }

  getGalleryData = () => {
    Axios.get('/gallery')
      .then(response => {

        this.setState({
          ...this.state,
          galleryList: response.data
        })
        // galleryData = response.data;
        console.log('we got the data')
      })
      .catch(error => {
        console.log('error in axios.get', error);
      });
  }
  // description and alt = same variable

  galleryList = () => {


    console.log(this.state.galleryList);


  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br />

        < GalleryList galleryList={this.state.galleryList} />

        {/* <p>Gallery goes here</p> */}
        {/* <img alt="kitty" src="images/goat_small.jpg"/> */}
      </div>
    );
  }
}

export default App;
