import React from 'react';
import { Slider } from 'antd'

const ProgressBar = ({musicPlayed, setMusicPlayed}) => {
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
        onAfterChange={(val) => setMusicPlayed(val)} 
        tipFormatter={tipFormatter}
        />
    )
}

export default ProgressBar;