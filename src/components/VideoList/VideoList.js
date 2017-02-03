import React from 'react';
import './VideoList.css';

import VideoListItem from './VideoListItem';

const VideoList = (props) => {
  // console.log('videos in VideoList:', props.videos);
  const videoListItems = props.videos.map((video) => {
    return <VideoListItem key={video.id} video={video} />
  });

  return (
    <div className="video-list">
      <div className="video-list__header">
        Latest Picks
      </div>
      <ul className="video-list__list-items">
        {videoListItems}
      </ul>
    </div>
  );
};

export default VideoList;
