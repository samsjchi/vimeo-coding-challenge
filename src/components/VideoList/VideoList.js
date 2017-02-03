import React from 'react';
import './VideoList.css';

import VideoListItem from './VideoListItem';

const VideoList = (props) => {
  const videoListItems = props.videos.map((video) => {
    return <VideoListItem
      key={video.id}
      video={video}
      onVideoSelect={props.onVideoSelect} />
  });

  return (
    <div className="video-list">
      <div className="video-list__header">
        <div className="video-list__header-main">
          <div className="divider">-</div>
          <span>Latest Picks</span>
          <div className="divider">-</div>
        </div>
        <div className="video-list__header-sub">
          what we're watching right now
        </div>
      </div>
      <ul className="video-list__list-items">
        {videoListItems}
      </ul>
    </div>
  );
};

export default VideoList;
