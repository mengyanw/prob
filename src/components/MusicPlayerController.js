import React from "react";
import { Row, Column, Button } from 'antd';
import { PauseOutlined, CaretRightOutlined, StepBackwardOutlined, StepForwardOutlined} from '@ant-design/icons';

const MusicPlayerController = ({ isPlaying, setIsPlaying }) => {
  const pauseHandler = () => {
    setIsPlaying((prev) => !prev);
  };

  const goToPreviousTrackHandler = () => {
    return;
  };

  const goToNextTrackHandler = () => {
    return;
  };

  return (
    <>
      <Button shape='circle' onClick={goToPreviousTrackHandler} icon={<StepBackwardOutlined />} disabled></Button>
      <Button shape='circle' onClick={pauseHandler} icon={isPlaying ? <PauseOutlined /> : <CaretRightOutlined />}></Button>
      <Button shape='circle' onClick={goToNextTrackHandler} icon={<StepForwardOutlined />}></Button>
    </>
  );
};

export default MusicPlayerController;
