import React from 'react';
import './VideoListItem.css';

// Third party libraries & plugins
import FaPlay from 'react-icons/lib/fa/play';
import FaHeart from 'react-icons/lib/fa/heart';
import FaComment from 'react-icons/lib/fa/comment';

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
          <div className="video-list-item__stats">
            <div className="video-list-item__stats-plays">
              <span className="fa-icon fa-icon-play"><FaPlay /> </span>
              {video.stats_number_of_plays}
            </div>
            <div className="video-list-item__stats-likes">
              <span className="fa-icon fa-icon-heart"><FaHeart /></span>
              {video.stats_number_of_likes}
            </div>
            <div className="video-list-item__stats-comments">
              <span className="fa-icon fa-icon-comment"><FaComment /></span>
              {video.stats_number_of_comments}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
