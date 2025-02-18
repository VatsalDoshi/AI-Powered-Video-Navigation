import React, { useRef } from 'react';
import ReactPlayer from 'react-player/lazy';

interface VideoPlayerProps {
  videoId: string | string[] | undefined;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId }) => {
  const playerRef = useRef<ReactPlayer>(null);

  // Assume the backend serves the video at this URL
  const videoUrl = `http://localhost:8000/media/videos/${videoId}.mp4`;

  return (
    <div className="my-4">
      <ReactPlayer
        ref={playerRef}
        id="video-player"
        url={videoUrl}
        controls
        width="100%"
        height="auto"
      />
    </div>
  );
};

export default VideoPlayer;
