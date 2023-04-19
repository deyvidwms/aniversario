import React from 'react';

type Props = {
  video: string;
}

const VideoPlayer: React.FC<Props> = ({video}) => {
  return (
    <video autoPlay style={{position: 'absolute', width: '100%', height: '100%', top: '0', transform: 'translate(-100%, -100%)', zIndex: '-1'}}>
      <source src={video} type='video/mp4' />
    </video>
  );
}

export default VideoPlayer;