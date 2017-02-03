import React, { Component } from 'react';
import './App.css';

import VideoPlayer from '../VideoPlayer/VideoPlayer';
import VideoList from '../VideoList/VideoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      currentVideo: null
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
        this.setState({
          videos: videos,
          currentVideo: videos[0]
        });
      });
  }

  render() {
    return (
      <div className="App">
        <VideoPlayer video={this.state.currentVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({currentVideo: selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
