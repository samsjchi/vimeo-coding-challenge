import React, { Component } from 'react';
import './App.css';

import VideoPlayer from '../VideoPlayer/VideoPlayer';
import VideoList from '../VideoList/VideoList';

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
        // console.log('videos from parsed Fetch API response:', videos);
        this.setState({ videos });
      });
  }

  render() {
    return (
      <div className="App">
        <VideoPlayer video={this.state.videos[0]} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
