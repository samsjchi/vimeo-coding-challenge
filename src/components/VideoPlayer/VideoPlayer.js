import React from 'react';
import './VideoPlayer.css';

const VideoPlayer = ({video}) => {
  // console.log('video in VideoPlayer:', video);
  if(!video) return <div>Loading...</div>;

  const videoId = video.id;
  const videoUrl = `https://player.vimeo.com/video/${videoId}?autoplay=1`;

  // Parses video upload date to user-friendly format
  const uploadDate = new Date(video.upload_date);
  const dateString = uploadDate.toLocaleString('en-us', { month: "short" }) + '. ' + uploadDate.getDate() + ', ' + uploadDate.getFullYear();

  return (
    <div className="video-main">
      <div className="video-player">
        <iframe src={videoUrl} width="640" height="360" frameBorder="0" allowFullScreen></iframe>
      </div>
      <div className="video-content">
        <div className="video-info">
          <h1 className="video-info__title">{video.title}</h1>
          <div className="video-info__user-icon">
            <a href={video.user_url}><img src={video.user_portrait_medium} alt={video.user_url}></img></a>
          </div>
          <div className="video-info__user-info">
            <div className="video-info__username">from {video.user_name}</div>
            <div className="video-info__upload-date">published on {dateString}</div>
          </div>
          <div className="video-info__stats">
            {video.stats_number_of_plays} plays | {video.stats_number_of_likes} likes | {video.stats_number_of_comments} comments
          </div>
        </div>
        <div className="video-description">
          {video.description}
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
