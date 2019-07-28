import React, { Component } from 'react';
import './App.css';
import FloorPlanView from './main/FloorPlanView';

class App extends Component {
  state = {
    image: 'media/Main Floorplan.png', //default state could be logo image
    extension: 'png', 
    rotation: 0
  }
  
  imageChangeHandler = (event) => {
    let tmpPath =  URL.createObjectURL(event.target.files[0]); // create url to display image without storage
    this.setState({
      image: tmpPath,
      extension: event.target.files[0].name.split('.').pop() // parse extension
    })
  }

  imageRotationHandler = (event) => {
    this.setState({
        rotation: this.state.rotation + 90
    })
  }

  render() {
    return (
      <FloorPlanView 
        onUpload={this.imageChangeHandler} 
        onRotate={this.imageRotationHandler} 
        image={this.state.image} 
        extension={this.state.extension}
        rotation={this.state.rotation}/>
     );
  }
}

export default App;
