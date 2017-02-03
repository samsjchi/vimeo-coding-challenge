import React from 'react';
import './VideoList.css';

const VideoList = (props) => {
  return (
    <div className="video-list">
      <ul className="video-list__list-items">
        Number of videos returned from Vimeo API: {props.videos.length}
      </ul>
    </div>
  );
};

export default VideoList;
