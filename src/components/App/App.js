import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: []
    };
  }

  componentDidMount() {
    this.getVimeoVideos();
  }

  getVimeoVideos() {
    fetch('http://vimeo.com/api/v2/channel/staffpicks/videos.json') // Using Fetch API
      .then(res => res.json())
      .then(videos => {
        console.log('videos from parsed Fetch API response:', videos);
        this.setState({ videos });
      });
  }

  render() {
    return (
      <div className="App">
        Vimeo Coding Challenge
      </div>
    );
  }
}

export default App;
