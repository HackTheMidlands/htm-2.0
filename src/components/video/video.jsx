// Module Imports
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import classNames from 'classnames';
import PropTypes from 'prop-types';

// Helper imports

// Component imports

// Style imports
import style from './video.module.scss';

// Image imports
import VideoDotGrid from './assets/video-dot-grid.svg';

/**
 * MissionBlock component
 * @param props
 * @returns {*}
 * @constructor
 */
export const Video = ({
    sources, autoPlay, controls, unsupportedText,
}) => (
    <div className={style.videoWrapper}>
        <video className={style.video} autoPlay={autoPlay} controls={controls}>
            { sources.map(({ src, type }) => (
                <source key={src} src={src} type={type} />
            ))}
            { unsupportedText }
        </video>
        <div className={style.dotGrid} style={{ backgroundImage: `url('${VideoDotGrid}')` }} />
    </div>
);

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
