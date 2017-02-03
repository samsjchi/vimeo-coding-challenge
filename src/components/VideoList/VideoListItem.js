import React from 'react';
import './VideoListItem.css';

const VideoListItem = ({video}) => {
  // console.log('video in VideoListItem:', video);
  return (
    <li className="video-list-item-wrapper">
      <div className="video-list-item">
        <div className="video-list-item__thumbnail">
          <img src={video.thumbnail_large} alt={video.title} />
        </div>
        <div className="video-list-item__info">
          <div className="video-list-item__title">{video.title}</div>
          <div className="video-list-item__username">{video.user_name}</div>
          <div className="video-list-item__stats">{video.stats_number_of_plays} plays | {video.stats_number_of_likes} likes | {video.stats_number_of_comments} comments</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
