import React from 'react';
import './VideoListItem.css';

const VideoListItem = ({video, onVideoSelect}) => {
  const truncateUsername = (username) => {
    return (username.length > 12) ? username.slice(0, 12) + '...' : username;
  }
  const truncatedUsername = truncateUsername(video.user_name);

  return (
    <li className="video-list-item-wrapper" onClick={() => onVideoSelect(video)}>
      <div className="video-list-item">
        <div className="video-list-item__thumbnail">
          <img src={video.thumbnail_large} alt={video.title} />
        </div>
        <div className="video-list-item__info">
          <div className="video-list-item__title">{video.title}</div>
          <div className="video-list-item__username"><span>from</span> <a href={video.user_url}>{truncatedUsername}</a></div>
          <div className="video-list-item__stats">{video.stats_number_of_plays} plays | {video.stats_number_of_likes} likes | {video.stats_number_of_comments} comments</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
