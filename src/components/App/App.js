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

getGalleryData = () => {

  Axios.get('/gallery')
  .then()
  .catch();

}
// description and alt = same variable


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>

        <GalleryList galleryList=''/>

        <p>Gallery goes here</p>
        <img alt="kitty" src="images/goat_small.jpg"/>
      </div>
    );
  }
}

export default App;
