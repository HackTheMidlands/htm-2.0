// Module Imports
import React, { useRef, useState } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import classNames from 'classnames';
import PropTypes from 'prop-types';

// Helper imports

// Component imports

// Style imports
import style from './video.module.scss';

// Image imports
import VideoDotGrid from './assets/video-dot-grid.svg';
import Play from './assets/play.inline.svg';

/**
 * MissionBlock component
 * @param props
 * @returns {*}
 * @constructor
 */
export const Video = ({
    sources, autoPlay, controls, unsupportedText,
}) => {
    const videoRef = useRef();

    const [playing, setPlaying] = useState(false);

    const playButtonClick = () => {
        setPlaying(true);
        videoRef.current.play();
    };

    const onVideoPause = (e) => {
        setPlaying(false);
    };

    return (
        <div className={classNames([style.videoWrapper, { [`${style.playing}`]: playing }])}>
            <div onClick={playButtonClick} style={{ opacity: playing ? 0 : 1 }}>
                <Play className={style.play} />
            </div>
            <video
                ref={videoRef}
                className={style.video}
                autoPlay={autoPlay}
                controls={controls || playing}
                onPause={onVideoPause}
            >
                { sources.map(({ src, type }) => (
                    <source key={src} src={src} type={type} />
                ))}
                { unsupportedText }
            </video>
            <div className={style.dotGrid} style={{ backgroundImage: `url('${VideoDotGrid}')`, opacity: playing ? 0 : 1, pointerEvents: playing ? 'none' : 'all' }} />
        </div>
    );
};

// Prop definitions
Video.propTypes = {
    sources: PropTypes.arrayOf(PropTypes.shape({
        src: PropTypes.string,
        type: PropTypes.string,
    })).isRequired,
    autoPlay: PropTypes.bool,
    controls: PropTypes.bool,
    unsupportedText: PropTypes.string,
};

// Default props
Video.defaultProps = {
    autoPlay: false,
    controls: true,
    unsupportedText: 'Your browser was unable to play this video.',
};
