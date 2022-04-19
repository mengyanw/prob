import React from 'react';
import { Slider } from 'antd'

const ProgressBar = React.forwardRef(({ min, max, musicPlayed, setMusicPlayed, setIsSeeking}, ref) => {
    const onChangeHandler = (time) => {
        setIsSeeking(true); 
        setMusicPlayed(parseFloat(time))
    }
    const onAfterChangeHandler = (time) => {
        setIsSeeking(false);
        ref.current.seekTo(parseFloat(time));
    }
    const tipFormatter = (time) => {
        let minute = parseInt(time / 60);
        let second = time - 60 * parseInt(time / 60);
        let minute_str = minute < 10 ? `0${minute}` : `${minute}` 
        let second_str = second < 10 ? `0${second}` : `${second}` 
        return `${minute_str}: ${second_str}` 
    }
    return (
        <Slider 
        value={musicPlayed} 
        min={min}
        max={max}
        onChange={onChangeHandler}
        onAfterChange={onAfterChangeHandler} 
        tipFormatter={tipFormatter}
        />
    )
});

export default ProgressBar;