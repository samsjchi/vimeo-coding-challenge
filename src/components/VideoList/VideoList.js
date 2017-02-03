import React from 'react';
import './VideoList.css';

import VideoListItem from './VideoListItem';

const VideoList = (props) => {
  // console.log('videos in VideoList:', props.videos);
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
          ------------------------ &nbsp;Latest Picks&nbsp; ------------------------
        </div>
        <div className="video-list__header-sub">
          what we're loving right now
        </div>
      </div>
      <ul className="video-list__list-items">
        {videoListItems}
      </ul>
    </div>
  );
};

export default VideoList;
