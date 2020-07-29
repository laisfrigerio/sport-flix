import React from 'react';
import { VideoCardContainer } from './styles';

function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}


function VideoCard({ title, url, color }) {
  const image = `https://img.youtube.com/vi/${getYouTubeId(url)}/hqdefault.jpg`;
  return (
    <VideoCardContainer
      url={image}
      href={url}
      target="_blank"
      style={{ borderColor: color || 'red' }}
      title={title}
    />
  );
}

export default VideoCard;