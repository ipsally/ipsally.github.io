import React, { Component } from 'react';
import './App.css';
import Display from './main/Display';

class App extends Component {
  state = {
    image: 'media/fry.png'
  }
  
  imageChangeHandler = (event) => {
    console.log(event.target.files);
    let tmpPath =  URL.createObjectURL(event.target.files[0]);
    this.setState({
      image: tmpPath
    })
  }

  render() {
    return (
      <Display image={this.state.image} update={this.imageChangeHandler}/>
     );
  }
}

export default App;
