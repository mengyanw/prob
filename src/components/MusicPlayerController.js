import React from "react";
import { Row, Column, Button } from 'antd';
import { PauseOutlined, CaretRightOutlined, StepBackwardOutlined, StepForwardOutlined} from '@ant-design/icons';

const MusicPlayerController = ({ isPlaying, setIsPlaying, onPrevTrackHandler, onNextTrackHandler}) => {
  const pauseHandler = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <>
      <Button shape='circle' size='large' onClick={onPrevTrackHandler} icon={<StepBackwardOutlined />}></Button>{' '} 
       
      <Button shape='circle' size='large' onClick={pauseHandler} icon={isPlaying ? <PauseOutlined /> : <CaretRightOutlined />}></Button>{' '}
      <Button shape='circle' size='large' onClick={onNextTrackHandler} icon={<StepForwardOutlined />}></Button>
    </>
  );
};

export default MusicPlayerController;
