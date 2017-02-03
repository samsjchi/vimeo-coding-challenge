import React from 'react';
import './VideoListItem.css';

const VideoListItem = ({video}) => {
  return (
    <li className="video-list-item">
      {video.title}
    </li>
  );
};

export default VideoListItem;
