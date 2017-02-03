import React from 'react';
import './VideoListItem.css';

// Third party libraries & plugins
import numeral from 'numeral';
import FaPlay from 'react-icons/lib/fa/play';
import FaHeart from 'react-icons/lib/fa/heart';
import FaComment from 'react-icons/lib/fa/comment';

const VideoListItem = ({video, onVideoSelect}) => {
  // Truncate username to stay on one line
  const truncateUsername = (username) => (username.length > 12) ? username.slice(0, 12) + '...' : username;
  const truncatedUsername = truncateUsername(video.user_name);

  // Prettify video stats to display in user-friendly format
  const getPrettyPlayCount = (count) => (count < 1000) ? numeral(count).format('0,0') : numeral(count).format('0.0a');
  const prettyPlayCount = getPrettyPlayCount(video.stats_number_of_plays);
  const prettyLikeCount = numeral(video.stats_number_of_likes).format('0,0');
  const prettyCommentCount = numeral(video.stats_number_of_comments).format('0,0');

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
              {prettyPlayCount}
            </div>
            <div className="video-list-item__stats-likes">
              <span className="fa-icon fa-icon-heart"><FaHeart /></span>
              {prettyLikeCount}
            </div>
            <div className="video-list-item__stats-comments">
              <span className="fa-icon fa-icon-comment"><FaComment /></span>
              {prettyCommentCount}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
