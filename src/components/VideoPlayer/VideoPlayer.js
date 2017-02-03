import React from 'react';
import './VideoPlayer.css';

// Third party libraries & plugins
import linkifyHtml from 'linkifyjs/html';
import FaPlay from 'react-icons/lib/fa/play';
import FaHeart from 'react-icons/lib/fa/heart';
import FaComment from 'react-icons/lib/fa/comment';

const VideoPlayer = ({video}) => {
  if(!video) return <div>Loading...</div>;

  const videoId = video.id;
  const videoUrl = `https://player.vimeo.com/video/${videoId}?autoplay=1`;

  // Prettify video upload date to display in user-friendly format
  const uploadDate = new Date(video.upload_date);
  const dateString = uploadDate.toLocaleString('en-us', { month: "short" }) + '. ' + uploadDate.getDate() + ', ' + uploadDate.getFullYear();

  // Parses video description to recognize links
  const linkifiedDescription = linkifyHtml(video.description);

  return (
    <div className="video-main">
      <div className="video-player embed-responsive embed-responsive-16by9">
        <iframe src={videoUrl} width="640" height="360" frameBorder="0" allowFullScreen></iframe>
      </div>
      <div className="video-content">
        <div className="video-info">
          <h1 className="video-info__title">{video.title}</h1>
          <div className="video-info__user-icon">
            <a href={video.user_url}><img src={video.user_portrait_medium} alt={video.user_url}></img></a>
          </div>
          <div className="video-info__user-info">
            <div className="video-info__username"><span>from</span> &nbsp; <a href={video.user_url}>{video.user_name}</a></div>
            <div className="video-info__upload-date"><span>published on</span> &nbsp;{dateString}</div>
          </div>
          <div className="video-info__stats">
            <div className="video-info__stats-plays">
              <span className="fa-icon fa-icon-play"><FaPlay /></span> {video.stats_number_of_plays} plays
            </div>
            <div className="video-info__stats-likes">
              <span className="fa-icon fa-icon-heart"><FaHeart /></span>
              {video.stats_number_of_likes} likes
            </div>
            <div className="video-info__stats-comments">
              <span className="fa-icon fa-icon-comment"><FaComment /></span>
              {video.stats_number_of_comments} comments
            </div>
          </div>
        </div>
        <div className="video-description" dangerouslySetInnerHTML={{__html: linkifiedDescription}}>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
