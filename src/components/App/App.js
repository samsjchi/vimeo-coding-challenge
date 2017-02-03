import React, { Component } from 'react';
import './App.css';

import Header from '../Header/Header';
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
    fetch('https://vimeo.com/api/v2/channel/staffpicks/videos.json') // Using Fetch API
      .then(res => res.json())
      .then(videos => {
        this.setState({
          videos: videos,
          currentVideo: videos[0]
        });
      });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <VideoPlayer video={this.state.currentVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({currentVideo: selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
