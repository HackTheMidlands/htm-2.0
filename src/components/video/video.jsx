// Module Imports
import Play from './assets/play.inline.svg';
// Image imports
import VideoDotGrid from './assets/video-dot-grid.svg';
// Helper imports
// Component imports
// Style imports
import style from './video.module.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

/**
 * MissionBlock components
 * @param props
 * @returns {*}
 * @constructor
 */
export const Video = ({
    sources,
    poster,
    autoPlay,
    controls,
    unsupportedText,
    className,
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

    const stopVideo = () => {
        setPlaying(false);
        videoRef.current.pause();
    };

    return (
        <>
            <div
                className={classNames([
                    className,
                    style.videoWrapper,
                    { [`${style.playing}`]: playing },
                ])}>
                <div
                    onClick={playButtonClick}
                    style={{ opacity: playing ? 0 : 1 }}>
                    <Play className={style.play} />
                </div>
                <video
                    ref={videoRef}
                    className={style.video}
                    autoPlay={autoPlay}
                    controls={controls || playing}
                    onPause={onVideoPause}
                    poster={poster}>
                    {sources.map(({ src, type }) => (
                        <source key={src} src={src} type={type} />
                    ))}
                    {unsupportedText}
                </video>
                <div
                    className={style.dotGrid}
                    style={{
                        backgroundImage: `url('${VideoDotGrid}')`,
                        opacity: playing ? 0 : 1,
                        pointerEvents: playing ? 'none' : 'all',
                    }}
                />
            </div>
            <p
                className={classNames([
                    style.closeText,
                    {
                        [`${style.showCloseText}`]: playing,
                    },
                ])}
                onClick={stopVideo}>
                Close Video
            </p>
        </>
    );
};

// Prop definitions
Video.propTypes = {
    sources: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string,
            type: PropTypes.string,
        }),
    ).isRequired,
    poster: PropTypes.string,
    autoPlay: PropTypes.bool,
    controls: PropTypes.bool,
    unsupportedText: PropTypes.string,
};

// Default props
Video.defaultProps = {
    autoPlay: false,
    controls: true,
    unsupportedText: 'Your browser was unable to play this video.',
    poster: '',
};
