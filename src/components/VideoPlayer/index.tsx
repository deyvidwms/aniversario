import React from 'react';

type Props = {
  loop: boolean;
  video: string;
}

const VideoPlayer: React.FC<Props> = ({loop, video}) => {
  return (
    <video autoPlay loop={loop} style={{position: 'absolute', width: '100%', height: '100%', top: '0', transform: 'translate(-100%, -100%)', zIndex: '-1'}}>
      <source src={video} type='video/mp4' />
    </video>
  );
}

export default VideoPlayer;